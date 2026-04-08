import './styles/Skills.css';
import { useTranslation } from 'react-i18next';

const skillCategories = [
  { key: 'langages',   icon: '{ }', skills: ['JavaScript', 'Python', 'Java', 'C', 'SQL', 'PL/SQL'] },
  { key: 'frameworks', icon: '⚙',   skills: ['React', 'React Native', 'Expo', 'Supabase', 'Git', 'Microsoft Office'] },
  { key: 'domaines',   icon: '◈',   skills: ['Intelligence Artificielle', 'Algorithmique', 'Réseaux', 'Bases de données', 'Clean Architecture'] },
  { key: 'pedagogie',  icon: '▶',   skills: ['Bureautique', 'Programmation', 'Algorithmique', 'Réseaux', 'IA', 'Enfants & Lycéens'] },
];

const languageLevels = [
  { key: 'lang_ar', pct: 100 },
  { key: 'lang_fr', pct: 85 },
  { key: 'lang_en', pct: 80 },
  { key: 'lang_ru', pct: 20 },
];

export default function Skills() {
  const { t } = useTranslation();

  const languages = [
    { lang: t('skills.lang_ar_name'), level: t('skills.lang_ar_level'), pct: 100 },
    { lang: t('skills.lang_fr_name'), level: t('skills.lang_fr_level'), pct: 85 },
    { lang: t('skills.lang_en_name'), level: t('skills.lang_en_level'), pct: 80 },
    { lang: t('skills.lang_ru_name'), level: t('skills.lang_ru_level'), pct: 20 },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">{t('skills.title').split(' ')[0]} <span>{t('skills.title').split(' ').slice(1).join(' ')}</span></h2>
        <p className="section-subtitle">{t('skills.subtitle')}</p>

        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div key={cat.key} className="skill-category">
              <div className="skill-cat-header">
                <span className="skill-icon">{cat.icon}</span>
                <h3>{t(`skills.categories.${cat.key}`)}</h3>
              </div>
              <div className="skill-chips">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-chip">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="languages-section">
          <h3 className="lang-title">{t('skills.languages_title')}</h3>
          <div className="lang-list">
            {languages.map((l) => (
              <div key={l.lang} className="lang-item">
                <div className="lang-header">
                  <span className="lang-name">{l.lang}</span>
                  <span className="lang-level">{l.level}</span>
                </div>
                <div className="lang-bar-bg">
                  <div className="lang-bar-fill" style={{ width: `${l.pct}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}