import Icon from '@mdi/react';
import { IconContext } from 'react-icons';
import { mdiMicrosoftWindows, mdiAws, mdiMicrosoftVisualStudioCode} from '@mdi/js';
import { SiNetlify, SiFigma, SiHtml5, SiCss3, SiAwslambda, SiReact,
SiJavascript, SiSupabase, SiGithub, SiPlex, SiWordpress, SiNodedotjs,
SiHomeassistant, SiClaude, SiFlutter, SiEsphome,
SiNpm} from 'react-icons/si';
import Contact from './Contact';
import './LandingPageStyles.css';
import RecentScrobbles from '../components/RecentScrobbles';

const SqlIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C7.03 2 3 4.69 3 8v8c0 3.31 4.03 6 9 6s9-2.69 9-6V8c0-3.31-4.03-6-9-6zm0 17c-4.24 0-7-1.92-7-3V8c0-1.08 2.85-3 7-3s7 1.92 7 3v8c0 1.08-2.76 3-7 3z"/>
    <text x="12" y="14" textAnchor="middle" fontSize="6" fontWeight="bold" fontFamily="Arial" fill="currentColor">SQL</text>
  </svg>
);

const SKILL_GROUPS = [
  {
    category: "Web, Frontend & UX/UI",
    skills: [
      { component: <SiHtml5 />, name: 'HTML5' },
      { component: <SiCss3 />, name: 'CSS3' },
      { component: <SiJavascript />, name: 'JavaScript' },
      { component: <SiReact />, name: 'React' },
      { component: <SiFigma />, name: 'Figma' },
      { component: <SiWordpress />, name: 'WordPress' },
      { component: <SiFlutter />, name: 'Flutter' },
    ]
  },
  {
    category: "Backend & Database",
    skills: [
      { component: <SiNodedotjs />, name: 'Node.js' },
      { component: <SiSupabase />, name: 'Supabase' },
      { component: <SqlIcon />, name: 'SQL' },
      { component: <SiAwslambda />, name: 'AWS Lambda' },
    ]
  },
  {
    category: "Infrastructure & Tools",
    skills: [
      { component: <SiNpm />, name: 'npm' },
      { icon: mdiAws, name: 'AWS' },
      { component: <SiNetlify />, name: 'Netlify' },
      { component: <SiGithub />, name: 'GitHub' },
      { icon: mdiMicrosoftVisualStudioCode, name: 'VS Code' },
      { component: <SiClaude />, name: 'Claude' },
    ]
  },

  {
    category: "Systems & Home Lab",
    skills: [
      { component: <SiHomeassistant />, name: 'Home Assistant' },
      { component: <SiPlex />, name: 'Plex Server' },
      { icon: mdiMicrosoftWindows, name: 'Windows' },
      { component: <SiEsphome />, name: 'ESPHome' },
    ]
  }
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
                <p>I know and use the following technologies, services and systems regularly:</p>
              </article>
              <IconContext.Provider value={{ size: "2.2em", className: "global-class-name" }}>
              {SKILL_GROUPS.map((group, groupIndex) => (
                <div key={groupIndex} className="skill-group-container">
                  <h3 className="category-title">{group.category}</h3>
                  <div className="skills-grid">
                    {group.skills.map((skill, index) => (
                      <div className="skill-item" key={index}>
                        <div className="skill-icon">
                          {skill.component ? skill.component : <Icon path={skill.icon} size="2.8em" />}
                        </div>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </IconContext.Provider>
            </div>
          </header>
          <section id="recent-scrobbles-section">
        <RecentScrobbles />
      </section>
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