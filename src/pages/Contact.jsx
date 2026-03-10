import './ContactStyles.css';
import FormComponent from '../components/FormComponent';
import { useLanguage } from '../contexts/LanguageContext';


const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="contact-container">
      <h2 className="contact-title">{t('contact.title')}</h2>
      
      <div className="contact-content">
        <div className="contact-intro">
          <p>{t('contact.intro')}</p>
        </div>
        
        <FormComponent />
      </div>
    </div>
  );
};

export default Contact;