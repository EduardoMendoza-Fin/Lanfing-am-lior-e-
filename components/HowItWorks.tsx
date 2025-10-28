import styles from './HowItWorks.module.css';

const steps = [
  {
    title: 'Remplissez le court formulaire (30 secondes).',
    description: '👉 Seulement les infos essentielles pour comprendre votre situation.'
  },
  {
    title: 'Un conseiller certifié au Québec analyse votre profil.',
    description: 'Votre analyse est faite par un vrai professionnel, pas un robot.'
  }
  
];

type HowItWorksProps = {
  onStart?: () => void;
};

const HowItWorks = ({ onStart }: HowItWorksProps) => {
  return (
    <section className={`section ${styles.wrapper}`}>
      <div className="container">
        <h2>Comment ça fonctionne</h2>

        <div className={styles.grid}>
          {steps.map((step, index) => (
            <div key={step.title} className={styles.card}>
              <div className={styles.marker}>{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaContainer}>
          <button className={styles.ctaButton} onClick={onStart}>
            Commencer maintenant
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;