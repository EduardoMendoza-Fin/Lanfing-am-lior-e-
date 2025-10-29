import { useRef } from 'react';
import Hero from '../components/Hero';
import Tips from '../components/Tips';
import HowItWorks from '../components/HowItWorks';
import FormSection from '../components/Form';
import styles from '../styles/Home.module.css';
import Popup from '../components/Popup'; // ← ajout pour la popup

const HomePage = () => {
  const formRef = useRef<HTMLElement | null>(null);

  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={styles.page}>
      <Hero onScrollToForm={scrollToForm} />
      <section ref={formRef}>
        <FormSection />
      </section>
      <Tips onRequestAnalysis={scrollToForm} />
      <HowItWorks onStart={scrollToForm} />
      <section ref={formRef}>
        <FormSection />
      </section>

      {/* ----------- SECTION REASSURANCE ----------- */}
      <section className={`section ${styles.reassurance}`}>
        <div className="container">
          <h2>Pourquoi cette analyse est gratuite&nbsp;?</h2>
          <p>
            Parce qu’au Québec, peu de gens savent qu’ils peuvent choisir leur propre assurance hypothécaire.
            Notre mission : vous informer sans sans vente, sans pression.
            Vous comparez, vous économisez, vous décidez. <br />
             <br />
            <strong>Votre confidentialité est 100&nbsp;% garantie.</strong>
          </p>
        </div>
      </section>

      <footer className={styles.footer}>
        Service d’analyse indépendante – 100 % confidentiel – Québec.
      </footer>

      {/* ----------- POPUP D’INTERACTION (ÉTAPE 3) ----------- */}
      <Popup />
    </div>
  );
};

export default HomePage;