import { useState, useEffect } from 'react';
import '../pages/ContactStyles.css';
import { useLanguage } from '../contexts/LanguageContext';


function FormComponent() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    script.async = true;
    script.onload = () => {
      emailjs.init('7KdWdO7g89mTeCswg');
    };
    document.body.appendChild(script);
    
    return () => {
      const emailScript = document.querySelector('script[src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"]');
      if (emailScript) {
        document.body.removeChild(emailScript);
      }
    };
  }, []);

  const handleInputChange = ({ target: { name, value } }) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
    
    if (error) setError(null);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    if (!formData.user_name || !formData.user_email || !formData.message) {
      setError('Please fill in all fields');
      return;
    }
    
    setLoading(true);
    setError(null);

    emailjs.sendForm('service_hswxud5', 'template_2zg5dhj', event.target)
      .then(() => {
        console.log('SUCCESS!');
        setSubmitted(true);
        setLoading(false);
      }, (error) => {
        console.log('FAILED...', error);
        setError('Something went wrong. Please try again later.');
        setLoading(false);
      });

    setFormData({
      user_name: '',
      user_email: '',
      message: ''
    });
  };

  if (submitted) {
    return (
      <div className="form-success">
        <div className="success-icon">✓</div>
        <h2>{t('contact.messageSent')}</h2>
        <p>{t('contact.messageSentDescription')}</p>
        <button 
          className="send-another-btn"
          onClick={() => setSubmitted(false)}
        >
          {t('contact.sendAnotherMessage')}
        </button>
      </div>
    );
  }

  return (
    <div className="form-container">
      {error && <div className="form-error">{error}</div>}
      
      <form className="contact-form" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <input
            id="user_name"
            name="user_name"
            type="text"
            className="form-input"
            placeholder={t('contact.namePlaceholder')}
            value={formData.user_name}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <input
            id="user_email"
            name="user_email"
            type="email"
            className="form-input"
            placeholder={t('contact.emailPlaceholder')}
            value={formData.user_email}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <textarea
            id="message"
            name="message"
            className="form-input"
            placeholder={t('contact.messagePlaceholder')}
            value={formData.message}
            onChange={handleInputChange}
            rows="5"
            required
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className="submit-button"
          disabled={loading}
        >
          {loading ? t('contact.sending') : t('contact.sendMessage')}
        </button>
      </form>
    </div>
  );
}

export default FormComponent;