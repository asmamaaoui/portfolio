import './styles/Projects.css';
import { useTranslation } from 'react-i18next';
import rapportSmah from '../assets/rapport_smah.pdf';
import { FaMobileAlt, FaGlobe, FaFlask, FaBrain } from 'react-icons/fa';
import { FaGithub, FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    titleKey: 'SMAH',
    subtitleKey: 'projects.smah_subtitle',
    descKey: 'projects.smah_desc',
    tags: ['Python', 'Multi-Agent System', 'IA Explicable', 'Neuro-Symbolique', 'ML', 'HTML'],
    color: '#7C3AED',
    Icon: FaBrain,
    highlightKeys: ['projects.smah_h1','projects.smah_h2','projects.smah_h3','projects.smah_h4'],
    github: 'https://github.com/asmamaaoui/smah-study-planner',
    pdf: rapportSmah,
    typeKey: 'projects.type_research',
  },
  {
    id: 2,
    titleKey: 'Hydra',
    subtitleKey: 'projects.hydra_subtitle',
    descKey: 'projects.hydra_desc',
    tags: ['React Native', 'Expo', 'Supabase', 'Zustand', 'IA Agents', 'Push Notifications'],
    color: '#00B4D8',
    Icon: FaMobileAlt,
    highlightKeys: ['projects.hydra_h1','projects.hydra_h2','projects.hydra_h3','projects.hydra_h4'],
    github: 'https://github.com/asmamaaoui',
    typeKey: 'projects.type_mobile',
  },
  {
    id: 3,
    titleKey: 'Nebzo',
    subtitleKey: 'projects.nebzo_subtitle',
    descKey: 'projects.nebzo_desc',
    tags: ['React 18', 'React Native', 'Supabase Realtime', 'Recharts', 'CSS Modules', 'Vercel'],
    color: '#1A3557',
    Icon: FaFlask,
    highlightKeys: ['projects.nebzo_h1','projects.nebzo_h2','projects.nebzo_h3','projects.nebzo_h4'],
    github: 'https://github.com/asmamaaoui',
    live: 'https://nabzo.vercel.app',
    typeKey: 'projects.type_fullstack',
  },
  {
    id: 4,
    titleKey: 'Portfolio',
    subtitleKey: 'projects.portfolio_subtitle',
    descKey: 'projects.portfolio_desc',
    tags: ['React', 'CSS3', 'react-icons', 'GitHub Pages', 'Google Analytics', 'Responsive', 'EmailJS'],
    color: '#0502D6',
    Icon: FaGlobe,
    highlightKeys: ['projects.portfolio_h1','projects.portfolio_h2','projects.portfolio_h3','projects.portfolio_h4'],
    github: 'https://github.com/asmamaaoui/portfolio',
    live: 'https://asmamaaoui.github.io/portfolio',
    typeKey: 'projects.type_web',
  },
];

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">{t('projects.title').split(' ')[0]} <span>{t('projects.title').split(' ').slice(1).join(' ')}</span></h2>
        <p className="section-subtitle">{t('projects.subtitle')}</p>

        <div className="projects-list">
          {projects.map((proj, idx) => (
            <div key={proj.id} className={`project-card ${idx % 2 === 1 ? 'reverse' : ''}`}>

              <div className="project-visual"
                style={{ background: `${proj.color}12`, borderColor: `${proj.color}30` }}>
                <div className="project-icon-box" style={{ background: proj.color }}>
                  <proj.Icon size={40} color="white" />
                </div>
                <div className="project-highlights">
                  {proj.highlightKeys.map((key) => (
                    <div key={key} className="highlight-item">
                      <span className="check" style={{ color: proj.color }}>✓</span>
                      <span>{t(key)}</span>
                    </div>
                  ))}
                </div>
                <div className="project-type-badge" style={{ background: proj.color }}>
                  {t(proj.typeKey)}
                </div>
              </div>

              <div className="project-info">
                <h3 className="project-title">{proj.titleKey}</h3>
                <p className="project-subtitle">{t(proj.subtitleKey)}</p>
                <p className="project-desc">{t(proj.descKey)}</p>

                <div className="project-tags">
                  {proj.tags.map((tag) => (
                    <span key={tag} className="proj-tag"
                      style={{ borderColor: `${proj.color}50`, color: proj.color }}>{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={proj.github} target="_blank" rel="noreferrer" className="proj-btn btn-github">
                    <FaGithub size={16} /> {t('projects.btn_github')}
                  </a>
                  {proj.live && (
                    <a href={proj.live} target="_blank" rel="noreferrer"
                      className="proj-btn btn-live" style={{ background: proj.color, borderColor: proj.color }}>
                      <FaExternalLinkAlt size={13} /> {t('projects.btn_live')}
                    </a>
                  )}
                  {proj.pdf && (
                    <a href={proj.pdf} target="_blank" rel="noreferrer" className="proj-btn btn-pdf">
                      <FaFilePdf size={16} /> {t('projects.btn_pdf')}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}