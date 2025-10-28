import styles from './HowItWorks.module.css';

const steps = [
  {
    title: 'Remplissez le court formulaire (30 secondes).',
    description: 'Nous ne demandons que les informations essentielles pour comprendre votre situation.'
  },
  {
    title: 'Un conseiller certifié au Québec analyse votre profil.',
    description: 'Chaque analyse est réalisée par un professionnel qui connaît les exigences locales.'
  },
  {
    title: 'Vous recevez vos meilleures options gratuitement, sans engagement.',
    description: 'Nous vous envoyons un rapport clair pour décider sereinement de la meilleure protection.'
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
        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <div key={step.title} className={styles.step}>
              <div className={styles.marker}>{index + 1}</div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.ctaContainer}>
          <button className="cta-button" onClick={onStart}>
            Commencer maintenant
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
