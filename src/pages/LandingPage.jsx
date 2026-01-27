import Icon from '@mdi/react';
import { IconContext } from 'react-icons';
import { mdiMicrosoftWindows, mdiAws, mdiMicrosoftVisualStudioCode} from '@mdi/js';
import { SiNetlify, SiFigma, SiHtml5, SiCss3, SiAwslambda, SiReact,
SiJavascript, SiSupabase, SiGithub, SiPlex, SiWordpress, SiNodedotjs,
SiHomeassistant} from 'react-icons/si';
import Contact from './Contact';
import './LandingPageStyles.css';

const SqlIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C7.03 2 3 4.69 3 8v8c0 3.31 4.03 6 9 6s9-2.69 9-6V8c0-3.31-4.03-6-9-6zm0 17c-4.24 0-7-1.92-7-3V8c0-1.08 2.85-3 7-3s7 1.92 7 3v8c0 1.08-2.76 3-7 3z"/>
    <text x="12" y="14" textAnchor="middle" fontSize="6" fontWeight="bold" fontFamily="Arial" fill="currentColor">SQL</text>
  </svg>
);

const TECH_SKILLS = [
  { component: <SiHtml5 />, name: 'HTML5' },
  { component: <SiCss3 />, name: 'CSS3' },
  { component: <SiJavascript />, name: 'JavaScript' },
  { component: <SiReact />, name: 'React' },
  { component: <SiNodedotjs />, name: 'Node.js' },
  { icon: mdiAws, name: 'AWS' },
  { component: <SiAwslambda />, name: 'AWS Lambda' },
  { component: <SiSupabase />, name: 'Supabase' },
  { icon: mdiMicrosoftVisualStudioCode, name: 'VS Code' },
  { component: <SiWordpress />, name: 'WordPress' },
  { component: <SiHomeassistant />, name: 'Home Assistant' },
  { component: <SiFigma />, name: 'Figma' },
  { icon: mdiMicrosoftWindows, name: 'Windows' },
  { component: <SiPlex />, name: 'Plex' },
  { component: <SqlIcon />, name: 'SQL' },
  { component: <SiNetlify />, name: 'Netlify' },
  { component: <SiGithub />, name: 'GitHub' },
  
];

const LandingPage = () => {
  return (
    <main className="landing-page-wrapper">
      <section className="landing-container">
        <div className="landing-content">      
          <header className="info-section">
            <div className="info-card">
              <h1 className="name-heading">Erik Karlsson</h1>
              <h2 className="title-heading">Frontend developer, tech nerd and music lover</h2>
              <article className="about-text">
                <p>I'm a creative person who loves anything tech and web related. I'm also interested in all kinds of music.</p>
                <p>I know my way around the following web technologies, services and systems:</p>
              </article>
              <IconContext.Provider value={{ size: "2.6em", className: "global-class-name" }}>
              <div className="skills-grid">
                {TECH_SKILLS.map((skill, index) => (
                  <div className="skill-item" key={index}>
                    <div className="skill-icon">
                      {skill.component ? (
                        skill.component
                      ) : (
                        <Icon path={skill.icon} size="2.8em" />
                      )}
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </IconContext.Provider>
            </div>
          </header>
          <div className="scroll-indicator" aria-hidden="true"></div>
        </div>
      </section>
      
      <section id="contact-section">
        <Contact />
      </section>
    </main>
  );
};

export default LandingPage;