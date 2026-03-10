import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'sv' : 'en');
  };

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t: (key) => translations[language][key] || key
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About Me',
    
    'projects.title': 'Live web projects',
    'projects.viewLive': 'Live',
    'projects.video.title': 'Other Projects',
    'projects.clickEnlarge': 'Click to enlarge',

    'projects.musiquiz': 'A full-stack degree project for school. Challenge a friend to a music quiz! Backend uses Supabase and frontend made with React/Vite.',
    'projects.gameslibrary': 'A library to keep track of games. It allows users to add and remove games, mark them as completed and export/import lists.',
    'projects.myrecordcollection': 'A library to keep track of your record collection. Users can add and remove records and export/import lists.',
    'projects.legocollector': 'A library to keep track of your LEGO® collection. Users can search and add sets using Rebrickable and export/import lists.',
    'projects.weatherdashboard': 'A weather dashboard which uses OpenWeatherMap API to display weather information.',
    'projects.beepboxcovers': 'A Beepbox music portfolio made entirely from HTML and CSS styling. It features a widget component for playing both my cover and the original song in Spotify.',
    'projects.simpletodo': 'A simple to-do list application to keep track of tasks. Users can add, remove, and mark tasks as completed.',

    'videoprojects.birabuto': 'A cover of the Birabuto Kingdom theme from Super Mario Land 2, made in BeepBox.',
    'videoprojects.decobirds': 'A microcontroller project where I scan tags underneath Decobirds to play their call on a smart speaker.',

    'about.historyTitle': 'A History of Erik',
    'about.1985.title': 'Born in 1985',
    'about.1990.title': 'Early Childhood',
    'about.1998.title': 'First Website',
    'about.2000.title': 'Digital Media Beginnings',
    'about.2002.title': 'Media Studies',
    'about.2005.title': 'University Studies',
    'about.2006.title': 'Youtube',
    'about.2010.title': 'Teacher Position',
    'about.2020.title': 'Student Assistant',
    'about.2023.title': 'Frontend Studies',
    'about.2025.title': 'Graduation & Job Search',
    'about.2026.title': 'Network Technology Teacher',
    
    'contact.title': 'Get in Touch',
    'contact.intro': "If you'd like to get in touch, send me a message using the form below and we'll take it from there!",
    'contact.namePlaceholder': 'Your name',
    'contact.emailPlaceholder': 'Your email address',
    'contact.messagePlaceholder': 'Your message',
    'contact.sendMessage': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.messageSent': 'Message Sent!',
    'contact.messageSentDescription': "Thank you for your message. I'll get back to you as soon as possible.",
    'contact.sendAnotherMessage': 'Send Another Message',
    
    'landing.subtitle': 'Frontend developer, tech nerd and music lover',
    'landing.about1': "I'm a creative person who loves anything tech and web related. I'm also interested in all kinds of music.",
    'landing.about2': 'I know and use the following technologies, services and systems regularly:',
    
    'skills.frontend': 'Frontend & UX/UI',
    'skills.backend': 'Backend & Database',
    'skills.infrastructure': 'Infrastructure & Tools',
    'skills.systems': 'Systems & Home Lab',

    'lastfm.loading': 'Loading music...',
    'lastfm.recentlylistened': 'Recently listened to:',
    'lastfm.listeningnow': 'LISTENING NOW',
    'lastfm.justNow': 'Just now',
    'lastfm.minutesAgo': 'minutes ago',
    'lastfm.hoursAgo': 'hours ago',
    'lastfm.daysAgo': 'days ago',
  },
  sv: {
    'nav.home': 'Hem',
    'nav.projects': 'Projekt',
    'nav.about': 'Om Mig',
    
    'projects.title': 'Webbprojekt',
    'projects.viewLive': 'Live',
    'projects.video.title': 'Andra projekt',
    'projects.clickEnlarge': 'Klicka för att förstora',

    'projects.musiquiz': 'Ett fullstack-projekt som jag gjorde som examensarbete. Utmana en vän på ett musikquiz! Backend använder Supabase och frontend är gjord med React/Vite.',
    'projects.gameslibrary': 'Ett webbsida för att hålla koll på spel till Nintendo Switch och PC. Som användare kan man lägga till och ta bort spel, markera dem som klara och exportera/importera listor.',
    'projects.myrecordcollection': 'Ett webbsida för att hålla koll på din skivsamling. Som användare kan man lägga till och ta bort skivor och exportera/importera listor.',
    'projects.legocollector': 'Ett webbsida för att hålla koll på din LEGO®-samling. Som användare kan man söka och lägga till set med hjälp av Rebrickable och exportera/importera listor.',
    'projects.weatherdashboard': 'En vädersida som använder OpenWeatherMap API för att visa väderinformation.',
    'projects.beepboxcovers': 'En Beepbox-musikportfölj gjord helt i HTML och CSS. Den har en widget-komponent för att spela både min cover och originalet i Spotify.',
    'projects.simpletodo': 'En enkel att-göra-lista för att hålla koll på uppgifter. Användare kan lägga till, ta bort och markera uppgifter som klara.',

    'videoprojects.birabuto': 'En cover av "Birabuto Kingdom"-temat från Super Mario Land 2, gjord i BeepBox.',
    'videoprojects.decobirds': 'Ett mikrokontrollerprojekt där jag skannar taggar under Decobirds för att spela deras läte på en smart högtalare.',
    
    'about.historyTitle': 'En kort story om Erik',
    'about.1985.title': 'Född 1985',
    'about.1990.title': 'Tidig barndom',
    'about.1998.title': 'Första hemsidan',
    'about.2000.title': 'Början på digitala medier',
    'about.2002.title': 'Mediestudier',
    'about.2005.title': 'Universitetsstudier',
    'about.2006.title': 'Youtube',
    'about.2010.title': 'Lärartjänst',
    'about.2020.title': 'Elevassistent',
    'about.2023.title': 'Frontend-studier',
    'about.2025.title': 'Examen & jobbsök',
    'about.2026.title': 'Lärare i nätverksteknik',
    
    'contact.title': 'Kontakta mig',
    'contact.intro': 'Om du vill komma i kontakt med mig, använd formuläret nedan så tar vi det därifrån!',
    'contact.namePlaceholder': 'Ditt namn',
    'contact.emailPlaceholder': 'Din e-postadress',
    'contact.messagePlaceholder': 'Ditt meddelande',
    'contact.sendMessage': 'Skicka meddelande',
    'contact.sending': 'Skickar...',
    'contact.messageSent': 'Meddelande skickat!',
    'contact.messageSentDescription': 'Kul att du hör av dig! Jag återkommer så snart som möjligt.',
    'contact.sendAnotherMessage': 'Skicka ett meddelande till',
    
    'landing.subtitle': 'Frontendutvecklare, tekniknörd och musikälskare',
    'landing.about1': 'Jag är en kreativ person som älskar allt som har med teknik och webben att göra. Jag är också intresserad av musik i alla dess former.',
    'landing.about2': 'Jag har kompetens inom följande teknologier, tjänster och system:',

    'skills.frontend': 'Frontend & UX/UI',
    'skills.backend': 'Backend & Databaser',
    'skills.infrastructure': 'Infrastruktur & verktyg',
    'skills.systems': 'System & Hemautomation',

    'lastfm.loading': 'Laddar musik...',
    'lastfm.recentlylistened': 'Nyligen lyssnat på:',
    'lastfm.listeningnow': 'LYSSNAR JUST NU',
    'lastfm.justNow': 'Nyss',
    'lastfm.minutesAgo': 'minuter sedan',
    'lastfm.hoursAgo': 'timmar sedan',
    'lastfm.daysAgo': 'dagar sedan',
  }
};