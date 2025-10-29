import styles from './Hero.module.css';
import { motion } from 'framer-motion';

type HeroProps = {
  onScrollToForm?: () => void;
};

const Hero = ({ onScrollToForm }: HeroProps) => {
  const handleScrollToForm = () => {
    if (onScrollToForm) {
      onScrollToForm();
    } else {
      const el = document.getElementById('lead-form');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Tracking Meta Pixel
    if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
      (window as any).fbq('trackCustom', 'CTA_Hero_Click');
    }
  };

  return (
    <motion.header
      className={styles.hero}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div className={styles.overlay}>
        <div className={styles.content}>
          {/* Tagline */}
          <span className={styles.tagline}>🔒 Analyse confidentielle • Offerte sans frais</span>

          {/* Titre principal */}
          <h1 className={styles.title}>
            Les astuces des conseillers pour protéger votre maison... <br />
            <span className={styles.highlight}>sans payer trop cher.</span>
          </h1>

          {/* Sous-titre premium */}
          <p className={styles.subtitle}>
            Remplissez le court questionnaire pour découvrir combien vous pourriez<strong> économiser sur votre assurance hypothécaire.</strong>
          </p>

          {/* CTA principal */}
          <button className={styles.cta} onClick={handleScrollToForm}>
            Découvrir mes économies maintenant → 
          </button>

          {/* Points de confiance */}
          <ul className={styles.bullets}>
            <li>🔹 Jusqu’à 40 % d’économies sur votre assurance actuelle</li>
            <li>🔹 Conseillers certifiés au Québec.</li>
            <li>🔹 Déjà +300 propriétaires analysés au Québec</li>
          </ul>
        </div>
      </div>
    </motion.header>
  );
};

export default Hero;