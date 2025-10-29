import styles from './Hero.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
          <span className={styles.tagline}>🔒 Analyse confidentielle - offerte sans frais</span>

          {/* Titre principal */}
          <h1 className={styles.title}>
            Voulez-vous payer moins cher<br />
            pour protéger votre maison?
          </h1>

          {/* Sous-titre */}
          <p className={styles.subtitle}>
            Obtenez votre estimation gratuite et découvrez en 30 secondes
            combien vous pourriez économiser sur votre assurance hypothécaire.
          </p>

          {/* Champ / CTA */}
          <button className={styles.cta} onClick={handleScrollToForm}>
            Découvrir mes économies →
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Hero;