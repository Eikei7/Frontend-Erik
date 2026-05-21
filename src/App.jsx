import './App.css';
import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";
import { useLocation } from 'react-router-dom';
import store from './store/store';
import { LanguageProvider } from './contexts/LanguageContext';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const LandingPage = lazy(() => import('./pages/LandingPage'));
const Projects = lazy(() => import('./pages/Projects'));
const AboutMe = lazy(() => import('./pages/AboutMe'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <LanguageProvider>
      <Provider store={store}>
        <Router>
          <ScrollToTop />
          <Navbar />
          <Suspense fallback={null}>
            <Routes>
              <Route path='/' element={<LandingPage />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/about' element={<AboutMe />} />
            </Routes>
          </Suspense>
          <Footer />
        </Router>
      </Provider>
      </LanguageProvider>
  );
}

export default App;