import styles from './Tips.module.css';

type TipItem = {
  icon: string;
  title: string;
  description: string;
};

const tips: TipItem[] = [
  {
    icon: '🏦',
    title: 'Astuce 1 : Choisissez votre assureur',
    description:
      "Vous avez le droit de choisir votre assureur pas seulement la banque. Comparez les primes et garanties offertes par des assureurs indépendants : la loi ne vous oblige pas à rester avec l'offre de votre prêteur."
  },
  {
    icon: '📄',
    title: 'Astuce 2 : Révisez votre contrat',
    description:
      "Votre assurance peut être ajustée sans refaire votre prêt. Un conseiller peut revoir vos protections pour les rendre plus justes et souvent réduire vos paiements chaque mois."
  },
  {
    icon: '🔒',
    title: 'Astuce 3 : Protégez-vous en votre nom',
    description:
      "Une protection personnelle est transférable même si vous changez de banque. En optant pour une couverture en votre nom, vous gardez le contrôle et pouvez l’amener avec vous lors d’un refinancement."
  }
];

type TipsProps = {
  onRequestAnalysis?: () => void;
};

const Tips = ({ onRequestAnalysis }: TipsProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>Les 3 astuces clés</h2>

        <div className={styles.cards}>
          {tips.map((tip) => (
            <article key={tip.title} className={styles.card}>
              <div className={styles.icon}>{tip.icon}</div>
              <h3>{tip.title}</h3>
              <p>{tip.description}</p>
            </article>
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <button className={styles.ctaButton} onClick={onRequestAnalysis}>
            Je veux découvrir mes économies →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tips;