import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavbarStyles.css';
import Icon from '@mdi/react';
import { 
  mdiBriefcaseOutline, 
  mdiHomeVariantOutline, 
  mdiEmailOutline, 
  mdiAccountTieOutline,
  mdiFileDocumentOutline,
  mdiMenu,
  mdiClose
} from '@mdi/js';
import DarkModeButton from './DarkModeButton';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../contexts/LanguageContext';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const navLinks = [
    { to: '/', icon: mdiHomeVariantOutline, text: t('nav.home') },
    { to: '/projects', icon: mdiBriefcaseOutline, text: t('nav.projects') },
    { to: '/about', icon: mdiAccountTieOutline, text: t('nav.about') },
    { 
      to: '/cv-erik-karlsson.pdf', 
      icon: mdiFileDocumentOutline, 
      text: 'CV (PDF)', 
      isExternal: true 
    }
  ];
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-container">
        
        <div className="navbar-mobile-toggle" onClick={toggleMobileMenu}>
          <Icon path={mobileMenuOpen ? mdiClose : mdiMenu} size={1.5} />
        </div>
        
        <div className={`navbar-links ${mobileMenuOpen ? 'show' : ''}`}>
          {navLinks.map((link, index) => (
    link.isExternal ? (
      <a 
        href={link.to} 
        key={index} 
        className="nav-link"
        target="_blank" 
        rel="noopener noreferrer"
      >
        <Icon path={link.icon} size={1.2} className="nav-icon" />
        <span className="link-text">{link.text}</span>
      </a>
    ) : (
      <Link 
        to={link.to} 
        key={index} 
        className={`nav-link ${isActive(link.to)}`}
      >
        <Icon path={link.icon} size={1.2} className="nav-icon" />
        <span className="link-text">{link.text}</span>
      </Link>
    )
  ))}
</div>
        
        <div className="navbar-actions">
          <LanguageToggle />
          <DarkModeButton />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;  