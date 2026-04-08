import { useTranslation } from 'react-i18next';
import './styles/LanguageSwitcher.css';

const languages = [
  { code: 'fr', label: '🇫🇷 Français' },
  { code: 'en', label: '🇬🇧 English' },
  { code: 'ar', label: '🇹🇳 العربية' },
  { code: 'ru', label: '🇷🇺 Русский' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    const code = e.target.value;
    i18n.changeLanguage(code);
    document.documentElement.dir = code === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = code;
  };

  return (
    <div className="lang-select-wrapper">
      <select
        className="lang-select"
        value={i18n.language?.split('-')[0] || 'fr'}
        onChange={handleChange}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
      <span className="lang-arrow">▾</span>
    </div>
  );
}