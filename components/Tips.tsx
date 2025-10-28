import styles from './Tips.module.css';

type TipItem = {
  title: string;
  description: string;
};

const tips: TipItem[] = [
  {
    title: 'Vous avez le droit de choisir votre assureur — pas seulement la banque.',
    description:
      "Comparez les primes et garanties offertes par des assureurs indépendants : la loi ne vous oblige pas à rester avec l'offre de votre prêteur."
  },
  {
    title: 'Une révision de contrat peut réduire votre coût sans changer de prêt.',
    description:
      "Un conseiller peut renégocier les clauses d'assurance pour ajuster la protection à votre réalité et faire baisser la mensualité."
  },
  {
    title: 'Une protection personnelle est transférable même si vous changez de banque.',
    description:
      "En optant pour une couverture en votre nom, vous gardez le contrôle et pouvez l’amener avec vous lors d’un refinancement."
  }
];

type TipsProps = {
  onRequestAnalysis?: () => void;
};

const Tips = ({ onRequestAnalysis }: TipsProps) => {
  return (
    <section className={`section ${styles.wrapper}`}>
      <div className="container">
        <h2>Les 3 astuces clés</h2>
        <div className={styles.grid}>
          {tips.map((tip) => (
            <article key={tip.title} className={styles.card}>
              <h3>{tip.title}</h3>
              <p>{tip.description}</p>
            </article>
          ))}
        </div>
        <div className={styles.ctaContainer}>
          <button className="cta-button" onClick={onRequestAnalysis}>
            Recevoir mon analyse gratuite →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tips;
