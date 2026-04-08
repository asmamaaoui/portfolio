import { useState } from 'react';
import './styles/Contact.css';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaGithub, FaMapMarkerAlt, FaLinkedinIn } from 'react-icons/fa';
import { SiMalt } from 'react-icons/si';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_wo1zppk', 'template_4po2tzl',
      { name: form.name, email: form.email, message: form.message },
      'kyJtzMCWbQyBfYdea'
    ).then(() => setSent(true)).catch(() => alert('Erreur lors de l\'envoi'));
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">{t('contact.title').split(' ')[0]} <span>{t('contact.title').split(' ').slice(1).join(' ')}</span></h2>
        <p className="section-subtitle">{t('contact.subtitle')}</p>

        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon" style={{ background: '#EA433520', color: '#EA4335' }}><FaEnvelope /></div>
              <div>
                <p className="contact-label">Email</p>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=asmamaaoui520@gmail.com" className="contact-value">
                  asmamaaoui520@gmail.com
                </a>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon" style={{ background: '#0A66C220', color: '#0A66C2' }}><FaLinkedinIn /></div>
              <div>
                <p className="contact-label">LinkedIn</p>
                <a href="https://www.linkedin.com/in/asma-maaoui-83556a257/" target="_blank" rel="noreferrer" className="contact-value">
                  Maaoui Asma
                </a>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon" style={{ background: '#33333320', color: '#333' }}><FaGithub /></div>
              <div>
                <p className="contact-label">GitHub</p>
                <a href="https://github.com/asmamaaoui" target="_blank" rel="noreferrer" className="contact-value">
                  asmamaaoui
                </a>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon" style={{ background: '#FC393920', color: '#FC3939' }}><SiMalt /></div>
              <div>
                <p className="contact-label">Malt</p>
                <a href="https://www.malt.fr/profile/asmamaaoui" target="_blank" rel="noreferrer" className="contact-value">
                  asmamaaoui
                </a>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon" style={{ background: '#0502D620', color: '#0502D6' }}><FaMapMarkerAlt /></div>
              <div>
                <p className="contact-label">{t('contact.location_label')}</p>
                <span className="contact-value">{t('about.location_value')}</span>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t('contact.name_label')}</label>
              <input type="text" id="name" name="name"
                placeholder={t('contact.name_placeholder')}
                value={form.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t('contact.email_label')}</label>
              <input type="email" id="email" name="email"
                placeholder={t('contact.email_placeholder')}
                value={form.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t('contact.message_label')}</label>
              <textarea id="message" name="message" rows={6}
                placeholder={t('contact.message_placeholder')}
                value={form.message} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              {sent ? `✓ ${t('contact.btn_sent')}` : t('contact.btn_send')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}