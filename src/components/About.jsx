import './styles/About.css';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  const stats = [
    { number: '4',  label: t('about.stats.projects') },
    { number: '2+', label: t('about.stats.experience') },
    { number: '4',  label: t('about.stats.languages') },
    { number: '5+', label: t('about.stats.certifications') },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">{t('about.title').split(' ')[0]} <span>{t('about.title').split(' ').slice(1).join(' ')}</span></h2>
        <p className="section-subtitle">{t('about.subtitle')}</p>

        <div className="about-content">
          <div className="about-text">
            <h3>{t('about.heading')}</h3>
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>

            <div className="about-info">
              <div className="info-item">
                <span className="info-label">{t('about.location_label')}</span>
                <span className="info-value">{t('about.location_value')}</span>
              </div>
              <div className="info-item">
                <span className="info-label">{t('about.email_label')}</span>
                <span className="info-value">asmamaaoui520@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="info-label">{t('about.formation_label')}</span>
                <span className="info-value">{t('about.formation_value')}</span>
              </div>
              <div className="info-item">
                <span className="info-label">{t('about.dispo_label')}</span>
                <span className="info-value available">{t('about.dispo_value')}</span>
              </div>
            </div>

            <a href="/CV_Asma_Maaoui.pdf" download className="btn btn-primary">
              {t('about.cv')}
            </a>
          </div>

          <div className="about-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}