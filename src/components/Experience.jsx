import './styles/Experience.css';
import { useTranslation } from 'react-i18next';

export default function Experience() {
  const { t } = useTranslation();

  const experiences = [
    {
      title: t('experience.exp1_title'),
      company: 'ISIGK — Kairouan',
      date: t('experience.exp1_date'),
      tasks: [t('experience.exp1_t1'), t('experience.exp1_t2')],
    },
    {
      title: t('experience.exp2_title'),
      company: 'Espace Sinda — Grombalia',
      date: t('experience.exp2_date'),
      tasks: [t('experience.exp2_t1'), t('experience.exp2_t2')],
    },
    {
      title: t('experience.exp3_title'),
      company: t('experience.exp3_company'),
      date: t('experience.exp3_date'),
      tasks: [t('experience.exp3_t1'), t('experience.exp3_t2')],
    },
    {
      title: t('experience.exp4_title'),
      company: 'Good Partners Cluster (GPC) — Grombalia',
      date: t('experience.exp4_date'),
      tasks: [t('experience.exp4_t1'), t('experience.exp4_t2')],
    },
  ];

  const education = [
    {
      title: t('experience.edu1_title'),
      school: 'ISIGK — Institut Supérieur d\'Informatique et de Gestion de Kairouan',
      date: t('experience.edu1_date'),
    },
    {
      title: t('experience.edu2_title'),
      school: 'ISIGK — Institut Supérieur d\'Informatique et de Gestion de Kairouan',
      date: t('experience.edu2_date'),
    },
  ];

  const certifications = [
    t('experience.certif1'),
    t('experience.certif2'),
    t('experience.certif3'),
    t('experience.certif4'),
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">{t('experience.title').split(' ')[0]} <span>{t('experience.title').split(' ').slice(1).join(' ')}</span></h2>
        <p className="section-subtitle">{t('experience.subtitle')}</p>

        <div className="exp-grid">
          <div>
            <h3 className="exp-col-title">{t('experience.work_title')}</h3>
            <div className="timeline">
              {experiences.map((exp, i) => (
                <div key={i} className="tl-item">
                  <div className="tl-dot-col">
                    <div className="tl-dot"></div>
                    {i < experiences.length - 1 && <div className="tl-line"></div>}
                  </div>
                  <div className="tl-content">
                    <span className="tl-date">{exp.date}</span>
                    <h4>{exp.title}</h4>
                    <p className="tl-company">{exp.company}</p>
                    <ul className="tl-tasks">
                      {exp.tasks.map((task, j) => <li key={j}>{task}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="exp-col-title">{t('experience.edu_title')}</h3>
            <div className="timeline">
              {education.map((edu, i) => (
                <div key={i} className="tl-item">
                  <div className="tl-dot-col">
                    <div className="tl-dot tl-dot-edu"></div>
                    {i < education.length - 1 && <div className="tl-line"></div>}
                  </div>
                  <div className="tl-content">
                    <span className="tl-date">{edu.date}</span>
                    <h4>{edu.title}</h4>
                    <p className="tl-company">{edu.school}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="exp-col-title" style={{ marginTop: '40px' }}>{t('experience.certif_title')}</h3>
            <div className="certif-list">
              {certifications.map((c, i) => (
                <div key={i} className="certif-item">
                  <span className="certif-icon">★</span>
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}