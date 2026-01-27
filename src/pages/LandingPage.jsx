import './LandingPageStyles.css';
import Icon from '@mdi/react';
import { 
  mdiMicrosoftWindows, 
  mdiReact, 
  mdiLanguageJavascript, 
  mdiLanguageCss3, 
  mdiHomeAssistant, 
  mdiLanguageHtml5, 
  mdiAws, 
  mdiNodejs, 
  mdiWordpress,
  mdiPlex,
  mdiGithub,
  mdiMicrosoftVisualStudioCode,
  mdiLambda
} from '@mdi/js';
import Contact from './Contact';

const LandingPage = () => {
  
  const techSkills = [
    { icon: mdiLanguageHtml5, name: 'HTML' },
    { icon: mdiLanguageCss3, name: 'CSS' },
    { icon: mdiLanguageJavascript, name: 'JavaScript' },
    { icon: mdiReact, name: 'React' },
    { icon: mdiNodejs, name: 'Node.js' },
    { icon: mdiAws, name: 'AWS' },
    { icon: mdiLambda, name: 'Lambda' },
    {
      svg: (
        <svg fill="currentColor" viewBox="0 0 48 48" role="img" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="96" height="96" >
          <g id="Ð¡Ð»Ð¾Ð¹_1">
            <path d="M23.5,30.5v-24c0-1.9-2.3-2.7-3.4-1.2l-16,21c-1.3,1.7-0.1,4.2,2,4.2H23.5z"></path>
            <path d="M23.5,18.5v24c0,1.9,2.4,2.7,3.6,1.2l16.8-21c1.4-1.7,0.1-4.2-2.1-4.2H23.5z"></path>
          </g>
        </svg>
      ),
      name: 'Supabase'
    },
    { icon: mdiMicrosoftVisualStudioCode, name: 'VS Code' },
    { icon: mdiWordpress, name: 'WordPress' },
    { icon: mdiHomeAssistant, name: 'Home Assistant' },
    { 
      svg: (
        <svg fill="currentColor" viewBox="0 0 25 25" role="img" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"/>
        </svg>
      ), 
      name: 'Figma' 
    },
    { icon: mdiMicrosoftWindows, name: 'Windows' },
    { icon: mdiPlex , name: 'Plex' },
    { icon: mdiGithub, name: 'GitHub' },
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="48"
          height="48"
        >
          <path d="M12 2C7.03 2 3 4.69 3 8v8c0 3.31 4.03 6 9 6s9-2.69 9-6V8c0-3.31-4.03-6-9-6zm0 17c-4.24 0-7-1.92-7-3V8c0-1.08 2.85-3 7-3s7 1.92 7 3v8c0 1.08-2.76 3-7 3z"/>
          <text x="12" y="14" textAnchor="middle" fontSize="6" fontFamily="Arial" fill="currentColor">SQL</text>
        </svg>
      ),
      name: 'SQL'
    }
  ];

  return (
    <>
      <div className="landing-container">
        <div className="landing-content">       
          <div className="info-section">
            <div className="info-card">
              <h1 className="name-heading">Erik Karlsson</h1>
              <h2 className="title-heading">Frontend developer, tech nerd and music lover</h2>
              <div className="about-text">
                <p>I'm a creative person who loves anything tech and web related. I'm also interested in all kinds of music.</p>
                <p>I know my way around the following web technologies and systems:</p>
              </div>
              <div className="skills-grid">
                {techSkills.map((skill, index) => (
                  <div className="skill-item" key={index}>
                    <div className="skill-icon">
                      {skill.icon ? (
                        <Icon path={skill.icon} size={1.9} />
                      ) : skill.svg ? (
                        skill.svg
                      ) : null}
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="scroll-indicator"></div>
        </div>
      </div>
      
      <div>
        <Contact />
      </div>
    </>
  );
};

export default LandingPage;