import styles from './Hero.module.css';

type HeroProps = {
  onDiscoverClick?: () => void;
};

const Hero = ({ onDiscoverClick }: HeroProps) => {
  return (
    <header className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <span className="tagline">ANALYSE CONFIDENTIELLE</span>
          <h1 className={styles.title}>Les astuces des conseillers pour protéger votre maison… sans payer trop cher.</h1>
          <p className={styles.subtitle}>
            Voici ce que la majorité des propriétaires ignorent sur leur assurance hypothécaire — et comment certains économisent
            des centaines de dollars chaque année sans réduire leur couverture.
          </p>
          <button className="cta-button" onClick={onDiscoverClick}>
            Découvrir les astuces
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
