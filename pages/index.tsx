import { useRef } from 'react';
import Hero from '../components/Hero';
import Tips from '../components/Tips';
import HowItWorks from '../components/HowItWorks';
import FormSection from '../components/Form';
import styles from '../styles/Home.module.css';

const HomePage = () => {
  const formRef = useRef<HTMLDivElement | null>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.page}>
      <Hero onDiscoverClick={scrollToForm} />
      <Tips onRequestAnalysis={scrollToForm} />
      <HowItWorks onStart={scrollToForm} />
      <div ref={formRef}>
        <FormSection />
      </div>
      <section className={`section ${styles.reassurance}`}>
        <div className="container">
          <h2>Pourquoi cette analyse est gratuite ?</h2>
          <p>
            Cette analyse vise simplement à informer les propriétaires sur les options souvent méconnues de protection
            hypothécaire. Elle ne remplace pas un conseil financier et ne mène à aucune vente directe. Votre confidentialité est
            garantie.
          </p>
        </div>
      </section>
      <footer className={styles.footer}>
        Service d’analyse indépendante – 100 % confidentiel – Québec.
      </footer>
    </div>
  );
};

export default HomePage;
