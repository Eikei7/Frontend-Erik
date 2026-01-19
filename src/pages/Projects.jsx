import { useState } from 'react';
import DataComponent from '../components/DataComponent';
import './ProjectStyles.css';
import OverlayProjectCard from '../components/OverlayProjectCard';

const Projects = () => {
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
      image: "img/musiquiz.png",
      description: "A full-stack degree project for school. Challenge a friend to a music quiz! Backend uses Supabase and frontend made with React/Vite."
    },
    {
      title: "Nintendo Switch Game Library",
      url: "https://games-library.frontend-erik.se/",
      image: "img/switch-library.png",
      description: "A library to keep track of Nintendo Switch games. It allows users to add and remove games, mark them as completed and export/import lists as JSON."
    },
    {
      title: "My Record Collection",
      url: "https://record-collection.frontend-erik.se/",
      image: "img/my-record-collection.png",
      description: "A library to keep track of your record collection. Users can add and remove records and export/import lists as JSON."
    },
    {
      title: "LEGO® Collector",
      url: "https://lego.frontend-erik.se/",
      image: "img/lego-collector.png",
      description: "A library to keep track of your LEGO® collection. Users can add and remove sets and export/import lists as JSON."
    },
    {
      title: "Weather Dashboard",
      url: "https://weather.frontend-erik.se/",
      image: "img/weather.png",
      description: "A weather dashboard which uses OpenWeatherMap API to display weather information."
    },
    {
      title: "Beepbox Covers",
      url: "https://beepbox.frontend-erik.se/",
      image: "img/beepbox.png",
      description: "A Beepbox music portfolio made entirely from HTML and CSS styling. It features a widget component for playing both my cover and the original song in Spotify."
    },
    {
      title: "Simple ToDo",
      url: "https://todo.frontend-erik.se/",
      image: "img/todo.png",
      description: "A simple to-do list application to keep track of tasks. Users can add, remove, and mark tasks as completed."
    }
  ];

  const videoProjects = [
    {
      id: "ixHAfx7IQEY",
      title: "Birabuto Kingdom - Super Mario Land 2",
      description: "A cover of the Birabuto Kingdom theme from Super Mario Land 2, made in BeepBox."
    },
    {
      id: "Cz3iBitQFoc",
      title: "Playing birdsong on Alexa speakers using ESP32+RFID",
      description: "A microcontroller project where I scan tags underneath Decobirds to play their call on a smart speaker."
    }
  ];

  return (
    <div className='projects-container'>
      <h2 className='projects-title'>Some live web projects of mine</h2>
      
      <div className='projects-grid'>
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

      <DataComponent />
      
      <section className="video-projects-section">
        <h2 className='projects-title'>Other Projects</h2>
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