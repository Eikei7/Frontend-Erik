import React, { useState, useRef, useEffect } from 'react';
import './AboutMe.css';

const AboutMe = () => {
  const [activeYear, setActiveYear] = useState(1985);
  const timelineRef = useRef(null);
  
  // SEO canonical link
  useEffect(() => {
    const link = document.querySelector("link[rel='canonical']") || document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', 'https://frontend-erik.se/about');
    document.head.appendChild(link);
    
    // Cleanup function för att ta bort länken om komponenten unmountas
    return () => {
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
    };
  }, []);
  
  const timelineData = [
    {
      year: 1985,
      title: "Born in 1985",
      image: "img/windows1.png",
      content: (
        <p>I was born in the year when the <a href="https://en.wikipedia.org/wiki/Live_Aid" target="_blank" rel="noopener noreferrer">Live Aid concerts</a> took place, <a href="https://en.wikipedia.org/wiki/Windows_1.0" target="_blank" rel="noopener noreferrer">Microsoft's Windows 1.0</a> was released and <a href="https://en.wikipedia.org/wiki/Super_Mario_Bros." target="_blank" rel="noopener noreferrer">Super Mario Bros.</a> on the NES was available in shops. I chose these three events from my birth year for a reason. The reason being that, apart from growing up using Windows, I also love retro video games and music.</p>
      )
    },
    {
      year: 1990,
      title: "Early Childhood",
      image: "img/mario-nes.jpg",
      content: (
        <p>In the early 90s, I began developing my interest for video games. My sister and I shared a <a href="https://sv.wikipedia.org/wiki/Nintendo_Entertainment_System" target="_blank" rel="noopener noreferrer">Nintendo 8-bit</a> console between us, taking turns in playing Ice Climber, Zelda II, Volleyball and Super Mario bros. I found myself wondering about how video games work "under the hood".</p>
      )
    },
    {
      year: 1998,
      title: "First Website",
      image: "img/angelfire.jpeg",
      content: (
        <p>I've experienced the web since the time of dial-up modems. I was 13 years old when I built my first HTML-only website about myself, complete with animated GIFs and marquee texts, hosted at Angelfire.com. Right around this time (circa 1998 - 2000) I also quickly grew an interest in computers and the technology behind them. On the hardware side for example, I learnt how graphics cards and RAM sticks worked, and practiced swapping them out for newer components on our shared family computer. This early hands-on approach laid the groundwork for my technical problem-solving skills.</p>
      )
    },
    {
      year: 2000,
      title: "Digital Media Beginnings",
      image: "img/moviemaker.png",
      content: (
        <p>Eventually I saved up for a video capture card, which allowed me to put our recorded family holiday videos onto our computer, and that's when my interest in multimedia and graphics really took off. I frequently visited websites like <a href="https://www.newgrounds.com/" target="_blank" rel="noopener noreferrer">Newgrounds</a> (flash animation) and <a href="https://www.deviantart.com/" target="_blank" rel="noopener noreferrer">DeviantArt</a> (photos and digital art) for inspiration.</p>
      )
    },
    {
      year: 2002,
      title: "Media Studies",
      image: "img/sg_logo.png",
      content: (
        <p>This year I started my media studies at Sundsvalls gymnasium. Three exciting years of learning how to use Adobe Photoshop, Adobe Illustrator, Macromedia Director, InDesign, Pro Tools and more. I grew a fond interest for photography and sound work during this period. At home I used Adobe Audition to record myself playing guitar and singing.</p>
      )
    },
    {
      year: 2005,
      title: "University Studies",
      image: "img/umea2.png",
      content: (
        <p>After college I decided that I wanted to become a teacher, so I applied and got accepted into the teacher programme at <a href="https://umu.se" target="_blank" rel="noopener noreferrer">Umeå University</a> in Sweden. My two subjects were Music and English.</p>
      )
    },
    {
      year: 2010,
      title: "Teacher Position",
      image: "img/musicteacher.jpg",
      content: (
        <p>I started my first real job as a music teacher at a school outside of Sundsvall, Sweden.</p>
      )
    },
    {
      year: 2020,
      title: "Student Assistant",
      image: "img/nti.png",
      content: (
        <p>This was the year when working remotely became a reality for many people around the world. I had a position at <a href="https://ntigymnasiet.se/sundsvall/" target="_blank" rel="noopener noreferrer">NTI Gymnasiet</a> in Sundsvall, working as a student assistant. I came across many new and interesting subjects and technologies, such as JavaScript, PHP and Electromechanics.</p>
      ),
      additionalContent: (
        <p>I was also introduced to <a href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer">Home Assistant</a>, a home automation platform that allows you to control and automate various devices in your home. I started to build my own smart home system using Home Assistant, which sparked my interest in programming and automation.</p>
      )
    },
    {
      year: 2023,
      title: "Frontend Studies",
      image: "img/folkuniversitetet.jpg",
      content: (
        <p>This year I began my two year path at <a href="https://www.folkuniversitetet.se/kontakt/goteborg/" target="_blank" rel="noopener noreferrer">Folkuniversitetet</a> in Göteborg, Sweden to become a Frontend developer. The program provides a comprehensive foundation in modern web development, covering everything from user-centric design (UX/UI) to building robust Fullstack web applications. Through hands-on projects, I developed strong skills in core technologies like HTML, CSS, and JavaScript, while specializing in the React ecosystem. Furthermore, I expanded my technical breadth by exploring server-side development with Node.js to understand the complete lifecycle of a web application.</p>
      )
    },
    {
      year: 2025,
      title: "Graduation & Job Search",
      image: "img/developer.png",
      content: (
        <p>Having graduated in June, I hope to succeed in finding a place to work where I can make use of my skills in web development, contributing to meaningful projects, and perhaps exploring new areas like mobile app development or AI integration.</p>
      )
    },
    {
      year: 2026,
      title: "Network Technology Teacher",
      image: "img/nti.png",
      content: (
        <p>After six months of being unsuccessful in finding a permanent position, I was contacted by my old workplace and offered a half-time position as a teacher specializing in Network Technology, Network Administration, and Network Security. Even if these aren't my main areas of expertise, I decided to take the opportunity and expand my knowledge in these fields.</p>
      )
    }
  ];
  
  const scrollToEvent = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };
  
  const handleYearClick = (year) => {
    setActiveYear(year);
    scrollToEvent(`event-${year}`);
  };
  
  // Scroll-lyssnare för att uppdatera aktivt år
  useEffect(() => {
    const handleScroll = () => {
      const events = timelineData.map(item => {
        const element = document.getElementById(`event-${item.year}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            year: item.year,
            distance: Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2)
          };
        }
        return { year: item.year, distance: Infinity };
      });
      
      events.sort((a, b) => a.distance - b.distance);
      
      if (events.length > 0 && events[0].year !== activeYear) {
        setActiveYear(events[0].year);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeYear, timelineData]); // Lägg till timelineData i dependency array

  return (
    <div className="aboutme-container">
      <h2 className="aboutme-title">A History of Erik</h2>
            
      <div className="vertical-timeline-container">
        <div className="vertical-years-container">
          <div className="vertical-years" ref={timelineRef}>
            {timelineData.map((item) => (
              <div 
                key={item.year} 
                className={`vertical-year ${item.year === activeYear ? 'active' : ''}`}
                onClick={() => handleYearClick(item.year)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleYearClick(item.year);
                  }
                }}
                aria-label={`Jump to year ${item.year}`}
              >
                {item.year}
              </div>
            ))}
            <div className="vertical-timeline-line"></div>
          </div>
        </div>
        
        <div className="vertical-events-container">
          {timelineData.map((item) => (
            <article 
              id={`event-${item.year}`}
              key={item.year} 
              className={`vertical-event ${item.year === activeYear ? 'active' : ''}`}
            >
              <div className="vertical-event-content">
                <div className="vertical-event-main-flex">
                  <div className="vertical-event-left">
                    <h3 className="vertical-event-title">
                      <span className="vertical-event-year">{item.year}</span>
                      {item.title}
                    </h3>
                    <div className="vertical-event-body">
                      <div className="vertical-event-text">
                        {item.content}
                        {item.additionalContent && item.additionalContent}
                      </div>
                    </div>
                  </div>
                  {item.image && (
                    <div className="vertical-event-right">
                      <div className="vertical-event-image">
                        <img 
                          src={item.image} 
                          alt={`${item.title} - ${item.year}`}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;