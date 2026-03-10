import '../pages/ProjectStyles.css';
import { FaReact, FaJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { TbJson, TbApi } from "react-icons/tb";
import { SiSupabase } from 'react-icons/si';
import { useLanguage } from '../contexts/LanguageContext';

export const getTechIcon = (tech) => {
  switch (tech.toLowerCase()) {
    case 'react': return <FaReact title="React" color="#61DAFB" />;
    case 'javascript': return <FaJs title="JavaScript" color="#F7DF1E" />;
    case 'supabase': return <SiSupabase title="Supabase" color="#3ECF8E" />;
    case 'html': return <FaHtml5 title="HTML5" color="#E34F26" />;
    case 'css': return <FaCss3Alt title="CSS3" color="#1572B6" />;
    case 'json': return <TbJson title="JSON" color="#FFB800" />;
    case 'api': return <TbApi title="API" color="#FFB800" />;
    default: return null;
  }
};

const OverlayProjectCard = ({ project, openModal }) => {
  const { t } = useLanguage();
  return (
    <div className="horizontal-project-card">
      <div 
        className="horizontal-project-image" 
        style={{ backgroundImage: `url(${project.image})` }}
        onClick={() => openModal(project.image)}
      >
        <div className="image-zoom-hint">{t('projects.clickEnlarge')}</div>
      </div>
      
      <div className="horizontal-project-content">
        <h3 className="horizontal-project-title">{project.title}</h3>
        
        <p className="horizontal-project-description">{project.description}</p>
        
        <div className="horizontal-project-footer">
          <div className='projects-links'>
          <a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="horizontal-project-link"
          >
            {t('projects.viewLive')} <span className="arrow">→</span>
          </a>
          <a 
            href={project.github_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="horizontal-project-link"
          >
            GitHub <span className="arrow">→</span>
          </a>
          </div>
          {project.technologies && project.technologies.length > 0 && (
            <div className="tech-icons-wrapper">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-icon">
                  {getTechIcon(tech)}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OverlayProjectCard;