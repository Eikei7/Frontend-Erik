import { useLanguage } from '../contexts/LanguageContext';
import './LanguageToggle.css';
import { CircleFlag } from 'react-circle-flags'

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button 
      className="language-toggle" 
      onClick={toggleLanguage}
      aria-label={`Switch to ${language === 'en' ? 'Swedish' : 'English'}`}
    >
      <CircleFlag 
        countryCode="gb" 
        height="35" 
        className={`flag-icon ${language === 'en' ? 'active' : ''}`} 
      />
      <CircleFlag 
        countryCode="se" 
        height="35" 
        className={`flag-icon ${language === 'sv' ? 'active' : ''}`} 
      />
    </button>
  );
};

export default LanguageToggle;