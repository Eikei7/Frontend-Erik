import React, { useState, useRef, useEffect } from 'react';
import './AboutMe.css';
import { useLanguage } from '../contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';

const getTimelineData = (t, lang) => [
  {
    year: 1985,
    title: t('about.1985.title'),
    image: "img/windows1.png",
    content: lang === 'en' ? (
      <p>I was born in the year when the <a href="https://en.wikipedia.org/wiki/Live_Aid" target="_blank" rel="noopener noreferrer">Live Aid concerts</a> took place, <a href="https://en.wikipedia.org/wiki/Windows_1.0" target="_blank" rel="noopener noreferrer">Microsoft's Windows 1.0</a> was released and <a href="https://en.wikipedia.org/wiki/Super_Mario_Bros." target="_blank" rel="noopener noreferrer">Super Mario Bros.</a> on the NES was available in shops. I chose these three events from my birth year for a reason. The reason being that, apart from growing up using Windows, I also love retro video games and music.</p>
    ) : (
      <p>Jag föddes samma år som <a href="https://en.wikipedia.org/wiki/Live_Aid" target="_blank" rel="noopener noreferrer">Live Aid-konserterna</a> ägde rum, <a href="https://en.wikipedia.org/wiki/Windows_1.0" target="_blank" rel="noopener noreferrer">Microsofts Windows 1.0</a> släpptes och <a href="https://en.wikipedia.org/wiki/Super_Mario_Bros." target="_blank" rel="noopener noreferrer">Super Mario Bros.</a> till NES fanns i butikerna. Jag valde dessa tre händelser av en anledning: förutom att jag vuxit upp med Windows, så älskar jag musik och äldre tv-spel.</p>
    )
  },
  {
    year: 1990,
    title: t('about.1990.title'),
    image: "img/mario-nes.jpg",
    content: lang === 'en' ? (
      <p>In the early 90s, I began developing my interest for video games. My sister and I shared a <a href="https://sv.wikipedia.org/wiki/Nintendo_Entertainment_System" target="_blank" rel="noopener noreferrer">Nintendo 8-bit</a> console between us, taking turns in playing Ice Climber, Zelda II, Volleyball and Super Mario bros. I found myself wondering about how video games work "under the hood".</p>
    ) : (
      <><p>I början av 90-talet föddes mitt intresse för tv-spel. Min syster och jag delade på ett <a href="https://sv.wikipedia.org/wiki/Nintendo_Entertainment_System" target="_blank" rel="noopener noreferrer">Nintendo 8-bit</a> och turades om att spela Ice Climber, Zelda II, Volleyball och Super Mario Bros. Jag började tidigt fundera på hur spelen faktiskt fungerade "under huven".</p><br></br><p><i>Favoritmusik under denna period: Michael Jackson</i></p></>
    )
  },
  {
    year: 1998,
    title: t('about.1998.title'),
    image: "img/angelfire.jpeg",
    content: lang === 'en' ? (
      <p>I've experienced the web since the time of dial-up modems. I was 13 years old when I built my first HTML-only website about myself, complete with animated GIFs and marquee texts, hosted at Angelfire.com. Right around this time (circa 1998 - 2000) I also quickly grew an interest in computers and the technology behind them. On the hardware side for example, I learnt how graphics cards and RAM sticks worked, and practiced swapping them out for newer components on our shared family computer. This early hands-on approach laid the groundwork for my technical problem-solving skills.</p>
    ) : (
      <><p>Jag har upplevt webben ända sedan tiden med uppringt modem. Jag var 13 år gammal när jag byggde min första hemsida i ren HTML om mig själv, komplett med animerade GIF-bilder och marquee-texter, hostad på Angelfire.com. Vid den här tiden (ca 1998 - 2000) växte mitt intresse för datorer och tekniken bakom snabbt. Jag lärde mig hur grafikkort och RAM-minnen fungerade och övade på att byta ut dem i familjens gemensamma dator. Detta praktiska tillvägagångssätt lade grunden för min tekniska problemlösningsförmåga.</p><br></br><p><i>Favoritmusik under denna period: Allt möjligt från dåvarande Absolute Dance och Absolute Music-skivorna.</i></p></>
    )
  },
  {
    year: 2000,
    title: t('about.2000.title'),
    image: "img/moviemaker.png",
    content: lang === 'en' ? (
      <p>Eventually I saved up for a video capture card, which allowed me to put our recorded family holiday videos onto our computer, and that's when my interest in multimedia and graphics really took off. I frequently visited websites like <a href="https://www.newgrounds.com/" target="_blank" rel="noopener noreferrer">Newgrounds</a> (flash animation) and <a href="https://www.deviantart.com/" target="_blank" rel="noopener noreferrer">DeviantArt</a> (photos and digital art) for inspiration.</p>
    ) : (
      <><p>Så småningom sparade jag ihop till ett videoredigeringskort, vilket gjorde att jag kunde föra över våra inspelade semesterfilmer till datorn. Det var då mitt intresse för multimedia och grafik verkligen tog fart. Jag besökte ofta sidor som <a href="https://www.newgrounds.com/" target="_blank" rel="noopener noreferrer">Newgrounds</a> (flash-animationer) och <a href="https://www.deviantart.com/" target="_blank" rel="noopener noreferrer">DeviantArt</a> (foto och digital konst) för inspiration.</p><br></br><p><i>Favoritmusik under denna period: Daft Punk, Phats & Small, Robert Miles</i></p></>
    )
  },
  {
    year: 2002,
    title: t('about.2002.title'),
    image: "img/sg_logo.png",
    content: lang === 'en' ? (
      <p>This year I started my media studies at Sundsvalls gymnasium. Three exciting years of learning how to use Adobe Photoshop, Adobe Illustrator, Macromedia Director, InDesign, Pro Tools and more. I grew a fond interest for photography and sound work during this period. At home I used Adobe Audition to record myself playing guitar and singing.</p>
    ) : (
      <><p>Detta år påbörjade jag medieprogrammet på Sundsvalls gymnasium. Under tre spännande år fick jag lära mig att använda Adobe Photoshop, Illustrator, Macromedia Director, InDesign, Pro Tools med mera. Jag utvecklade ett stort intresse för fotografi och ljudproduktion. Hemma använde jag Adobe Audition för att spela in mig själv när jag spelade gitarr och sjöng.</p><br></br><p><i>Favoritmusik under denna period: Linkin Park, Evanescence, Lifehouse, Lars Winnerbäck, Red Hot Chili Peppers, John Mayer</i></p></>
    )
  },
  {
    year: 2005,
    title: t('about.2005.title'),
    image: "img/umea2.png",
    content: lang === 'en' ? (
      <p>After college I decided that I wanted to become a teacher, so I applied and got accepted into the teacher programme at <a href="https://umu.se" target="_blank" rel="noopener noreferrer">Umeå University</a> in Sweden. My two subjects were Music and English.</p>
    ) : (
      <><p>Efter gymnasiet bestämde jag mig för att bli lärare, så jag sökte och kom in på lärarprogrammet vid <a href="https://umu.se" target="_blank" rel="noopener noreferrer">Umeå universitet</a>. Mina två ämnen var musik och engelska.</p><br></br><p><i>Favoritmusik under denna period: The Beatles, Jimmy Eat World, In Flames, Incubus, System of a Down, Buckethead, Jamie Cullum</i></p></>
    )
  },
  {
    year: 2006,
    title: t('about.2006.title'),
    image: "img/youtube.png",
    type: "minor",
    content: lang === 'en' ? (
      <p>In 2006, I joined a new and exciting platform called <a href="https://www.youtube.com/@Eikei" target="_blank" rel="noopener noreferrer">YouTube</a>, about a year after its launch in February 2005.</p>
    ) : (
      <p>Under 2006 gick jag med i en ny och spännande plattform som hette <a href="https://www.youtube.com/@Eikei" target="_blank" rel="noopener noreferrer">YouTube</a>, ungefär ett år efter lansering.</p>
    )
  },
  {
    year: 2010,
    title: t('about.2010.title'),
    image: "img/musicteacher.jpg",
    content: lang === 'en' ? (
      <p>I started my first real job as a music teacher at a school outside of Sundsvall, Sweden.</p>
    ) : (
      <><p>Efter universitetsstudierna flyttade jag hem till Medelpad och fick ett jobb som musiklärare på en skola utanför Sundsvall.</p><br></br><p><i>Favoritmusik under denna period: Owl City, Arch Enemy, Kings of Leon, Architects, Biffy Clyro, Ghost</i></p></>
    )
  },
  {
    year: 2020,
    title: t('about.2020.title'),
    image: "img/nti.png",
    content: lang === 'en' ? (
      <p>This was the year when working remotely became a reality for many people around the world. I had a position at <a href="https://ntigymnasiet.se/sundsvall/" target="_blank" rel="noopener noreferrer">NTI Gymnasiet</a> in Sundsvall, working as a student assistant. I came across many new and interesting subjects and technologies, such as JavaScript, PHP and Electromechanics.</p>
    ) : (
      <p>Detta var året då distansarbete blev verklighet för många. Jag arbetade på <a href="https://ntigymnasiet.se/sundsvall/" target="_blank" rel="noopener noreferrer">NTI Gymnasiet</a> i Sundsvall som elevassistent. Där kom jag i kontakt med många spännande ämnen som JavaScript, PHP och elektromekanik.</p>
    ),
    additionalContent: lang === 'en' ? (
      <p>I was also introduced to <a href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer">Home Assistant</a>, a home automation platform that allows you to control and automate various devices in your home. I started to build my own smart home system using Home Assistant, which sparked my interest in programming and automation.</p>
    ) : (
      <><p>Jag blev också introducerad för <a href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer">Home Assistant</a>, en plattform för hemautomation. Jag började bygga mitt eget smarta hem-system hemma, vilket verkligen tände gnistan för mitt intresse för programmering och automation.</p><br></br><p><i>Favoritmusik under denna period: Skraeckoedlan, Fatherson, Graveyard, Highasakite</i></p></>
    )
  },
  {
    year: 2023,
    title: t('about.2023.title'),
    image: "img/folkuniversitetet.jpg",
    content: lang === 'en' ? (
      <p>This year I began my two year path at <a href="https://www.folkuniversitetet.se/kontakt/goteborg/" target="_blank" rel="noopener noreferrer">Folkuniversitetet</a> in Göteborg, Sweden to become a Frontend developer. The program provided a comprehensive foundation in modern web development, covering everything from user-centric design (UX/UI) to building robust Fullstack web applications. Through hands-on projects, I developed strong skills in core technologies like HTML, CSS, and JavaScript, while specializing in the React ecosystem. Furthermore, I expanded my technical breadth by exploring server-side development with Node.js to understand the complete lifecycle of a web application.</p>
    ) : (
      <><p>Det här året påbörjade jag min tvååriga resa på <a href="https://www.folkuniversitetet.se/kontakt/goteborg/" target="_blank" rel="noopener noreferrer">Folkuniversitetet</a> i Göteborg för att bli Frontendutvecklare. Utbildningen gav mig en stabil grund i modern webbutveckling, från UX/UI-design till robusta fullstack-applikationer. Genom praktiska projekt utvecklade jag starka färdigheter i HTML, CSS och JavaScript med specialisering inom React. Jag utforskade även backend-utveckling med Node.js för att förstå en webbapplikations hela livscykel, samt versionshantering med Git.</p><br></br><p><i>Favoritmusik under denna period: Sleep Token, Greta Van Fleet, Kite, Albin Lee Meldau</i></p></>
    )
  },
  {
    year: 2025,
    title: t('about.2025.title'),
    image: "img/developer.png",
    content: lang === 'en' ? (
      <p>Having graduated in June, I hope to succeed in finding a place to work where I can make use of my skills in web development, contributing to meaningful projects, and perhaps exploring new areas like mobile app development or AI integration.</p>
    ) : (
      <><p>Efter min examen i juni hade jag förhoppningar om att hitta en arbetsplats där jag kunde få använda mina kunskaper inom webbutveckling, bidra till meningsfulla projekt och kanske utforska nya områden som mobilutveckling eller AI-integrering. Detta visade sig vara lättare sagt än gjort då arbetsmarknaden var tuff.</p><br></br><p><i>Favoritmusik under denna period: Bon Iver, Teddy Swims, Twenty One Pilots, Mountain Realm</i></p></>
    )
  },
  {
    year: 2026,
    title: t('about.2026.title'),
    image: "img/nti.png",
    content: lang === 'en' ? (
      <p>After six months of being unsuccessful in finding a permanent position, I was contacted by my old workplace and offered a half-time position as a teacher specializing in Network Technology, Network Administration, and Network Security. Even if these aren't my main areas of expertise, I decided to take the opportunity and expand my knowledge in these fields.</p>
    ) : (
      <p>Efter sex månader av jobbsökande blev jag kontaktad av min gamla arbetsplats och erbjöds en halvtidstjänst som vikarierande lärare inom nätverksteknik, nätverksadministration och nätverkssäkerhet. Även om det inte är mina huvudområden så valde jag att ta chansen för att bredda mina kunskaper ytterligare.</p>
    )
  }
];

const AboutMe = () => {
  const { t, language } = useLanguage();
  const [activeYear, setActiveYear] = useState(1985);
  const timelineRef = useRef(null);
  
  const timelineData = getTimelineData(t, language);
  
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
  }, [activeYear, timelineData]);

  return (
    <div className="aboutme-container">
      <Helmet>
        <link rel="canonical" href="https://frontend-erik.se/about" />
      </Helmet>
      <h2 className="aboutme-title">{t('about.historyTitle')}</h2>
            
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
              className={`vertical-event ${item.year === activeYear ? 'active' : ''} ${item.type === 'minor' ? 'vertical-event-minor' : ''}`}>
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