import { useRef } from 'react';
import Hero from '../components/Hero';
import Tips from '../components/Tips';
import HowItWorks from '../components/HowItWorks';
import FormSection from '../components/Form';
import styles from '../styles/Home.module.css';

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
            Cette analyse indépendante a pour seul objectif d’informer les propriétaires sur les solutions d’assurance
            hypothécaire souvent méconnues au Québec. <br />
             <br />
            <strong>Votre confidentialité est 100&nbsp;% garantie.</strong>
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