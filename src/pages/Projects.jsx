import { useState, useEffect } from 'react';
import './ProjectStyles.css';
import OverlayProjectCard from '../components/OverlayProjectCard';
import { useLanguage } from '../contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';


const Projects = () => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (imageSrc) => {
    setCurrentImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);  
    setCurrentImage(null);
  };

  const projects = [
    {
      title: "MusiQuiz",
      url: "https://musiquiz.frontend-erik.se/",
      github_url: "https://github.com/Eikei7/MusiQuiz",
      image: "img/musiquiz.png",
      technologies: ["react", "supabase"],
      description: t('projects.musiquiz')
    },
    {
      title: "Games Library",
      url: "https://games-library.frontend-erik.se/",
      github_url: "https://github.com/Eikei7/SwitchGames",
      image: "img/switch-library.png",
      technologies: ["react", "api", "json"],
      description: t('projects.gameslibrary')
    },
    {
      title: "My Record Collection",
      url: "https://record-collection.frontend-erik.se/",
      image: "img/my-record-collection.png",
      technologies: ["react", "api", "json"],
      description: t('projects.myrecordcollection')
    },
    {
      title: "LEGO® Collector",
      url: "https://lego.frontend-erik.se/",
      github_url: "https://github.com/Eikei7/Lego-collector",
      image: "img/lego-collector.png",
      technologies: ["react", "api", "json"],
      description: t('projects.legocollector')
    },
    {
      title: "Weather Dashboard",
      url: "https://weather.frontend-erik.se/",
      github_url: "https://github.com/Eikei7/Weather-dashboard",
      image: "img/weather.png",
      technologies: ["react", "api", "javascript","json"],
      description: t('projects.weatherdashboard')
    },
    {
      title: "Beepbox Covers",
      url: "https://beepbox.frontend-erik.se/",
      github_url: "https://github.com/Eikei7/Beepbox",
      image: "img/beepbox.png",
      technologies: ["html", "css"],
      description: t('projects.beepboxcovers')
    },
    {
      title: "Simple ToDo",
      url: "https://todo.frontend-erik.se/",
      github_url: "https://github.com/Eikei7/Simple-Todo",
      image: "img/todo.png",
      technologies: ["html", "css", "javascript"],
      description: t('projects.simpletodo')
    }
  ];

  const videoProjects = [
    {
      id: "ixHAfx7IQEY",
      title: "Birabuto Kingdom - Super Mario Land 2",
      description: t('videoprojects.birabuto')
    },
    {
      id: "Cz3iBitQFoc",
      title: "Playing bird calls on Alexa speakers using ESP32+RFID",
      description: t('videoprojects.decobirds')
    }
  ];

  return (
    <div className='projects-container'>
      <Helmet>
        <link rel="canonical" href="https://frontend-erik.se/projects" />
      </Helmet>
      <h2 className='projects-title'>{t('projects.title')}</h2>
      
      <div className='horizontal-projects-grid'>
        {projects.map((project, index) => (
          <OverlayProjectCard 
            key={index}
            project={project}
            openModal={openModal}
          />
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal} aria-label="Close modal">
              &times;
            </button>
            <img src={currentImage} alt="Large version" className="modal-image" />
          </div>
        </div>
      )}
      
      <section className="video-projects-section">
        <h2 className='projects-title'>{t('projects.video.title')}</h2>
        <div className="video-projects-grid">
          {videoProjects.map((video, index) => (
            <div key={index} className="video-card">
              <div className="video-container">
                <iframe 
                  src={`https://www.youtube.com/embed/${video.id}`} 
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>
              <div className="video-content">
                <h3 className="video-title">{video.title}</h3>
                <p className="video-description">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;