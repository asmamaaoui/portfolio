import './styles/Hero.css';
import profileImg from '../assets/profile.png';
import { useTranslation } from 'react-i18next';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaTiktok } from 'react-icons/fa';
import { SiMalt } from 'react-icons/si';

const socials = [
  { href: 'https://www.linkedin.com/in/asma-maaoui-83556a257/', icon: <FaLinkedinIn />, title: 'LinkedIn', color: '#0A66C2' },
  { href: 'https://github.com/asmamaaoui', icon: <FaGithub />, title: 'GitHub', color: '#333' },
  { href: 'https://mail.google.com/mail/?view=cm&fs=1&to=asmamaaoui520@gmail.com', icon: <FaEnvelope />, title: 'Email', color: '#EA4335' },
  { href: 'https://www.tiktok.com/@ma_code_by_asma', icon: <FaTiktok />, title: 'TikTok', color: '#010101' },
  { href: 'https://www.malt.fr/profile/asmamaaoui', icon: <SiMalt />, title: 'Malt', color: '#FC3939' },
];

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="hero">
      <div className="container hero-container">

        <div className="hero-text">
          <p className="hero-greeting">{t('hero.greeting')}</p>
          <h1 className="hero-name">Asma Maaoui</h1>
          <h2 className="hero-title">
            {t('hero.title').split('&')[0].trim()} &{' '}
            <span>{t('hero.title').split('&')[1]?.trim()}</span>
          </h2>
          <p className="hero-description">{t('hero.description')}</p>

          <div className="hero-badges">
            <span className="badge">React Native</span>
            <span className="badge">React</span>
            <span className="badge">Supabase</span>
            <span className="badge">IA</span>
          </div>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">{t('hero.btn_projects')}</a>
            <a href="#contact" className="btn btn-outline">{t('hero.btn_contact')}</a>
          </div>

          <div className="hero-socials">
            {socials.map((s) => (
              <a key={s.title} href={s.href} target="_blank" rel="noreferrer"
                title={s.title} className="social-btn" style={{ '--hover-color': s.color }}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image-ring">
            <img src={profileImg} alt="Asma Maaoui" className="hero-img" />
          </div>
          <div className="deco-circle deco-1"></div>
          <div className="deco-circle deco-2"></div>
        </div>

      </div>
      <a href="#about" className="scroll-down"><div className="scroll-arrow"></div></a>
    </section>
  );
}