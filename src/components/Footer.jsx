import './styles/Footer.css';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <p className="footer-logo">Asma<span>.</span></p>
        <p className="footer-copy">
          © {new Date().getFullYear()} Asma Maaoui — {t('footer.copy')}
        </p>
        <div className="footer-links">
          <a href="https://github.com/asmamaaoui" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/asma-maaoui-83556a257/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:asmamaaoui520@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}