import { useState } from 'react';
import '../pages/ProjectStyles.css';
import { FaReact, FaJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { TbJson } from "react-icons/tb";
import { SiSupabase } from 'react-icons/si';
import { TbApi } from "react-icons/tb";


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
  const [hovered, setHovered] = useState(false);
  
  return (
    <div 
      className="overlay-project-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div 
        className="overlay-image" 
        style={{ backgroundImage: `url(${project.image})` }}
        onClick={() => openModal(project.image)}
      >

        <div className={`overlay-content ${hovered ? 'hovered' : ''}`}>
          <h2 className="overlay-title">{project.title}</h2>
          <p className="overlay-description">{project.description}</p>
          
          {/* Ny container för att hålla länk och ikoner på samma rad */}
          <div className="overlay-footer">
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="overlay-link"
              onClick={(e) => e.stopPropagation()}
            >
              View Live <span className="arrow">→</span>
            </a>

            <div className="tech-icons-wrapper">
              {project.technologies?.map((tech, index) => (
                <span key={index} className="tech-icon-badge">
                  {getTechIcon(tech)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverlayProjectCard;