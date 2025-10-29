import { ChangeEvent, FormEvent, useState } from 'react';
import Image from 'next/image'; // ← ajout pour les logos
import styles from './Form.module.css';
import CountdownTimer from './CountdownTimer'; // ← ajout du timer

type SubmissionStatus = 'idle' | 'success' | 'error';

type FormData = {
  fullName: string;
  ageRange: string;
  phone: string;
  email: string;
  insured: 'Oui' | 'Non';
};

const initialData: FormData = {
  fullName: '',
  ageRange: '',
  phone: '',
  email: '',
  insured: 'Oui',
};

const FormSection = () => {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<SubmissionStatus>('idle');

  const handleChange =
    (field: keyof FormData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFormData((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName,
          ageRange: formData.ageRange,
          phone: formData.phone,
          email: formData.email,
          insured: formData.insured,
        }),
      });

      if (!response.ok) throw new Error('Request failed');

      setStatus('success');
      setFormData(initialData);

      // Meta Pixel : suivi de conversion
      if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
        window.fbq('track', 'Lead');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="lead-form" className={`section ${styles.wrapper}`}>
      <div className="container">
        <div className={styles.card}>
          {/* ----------- LOGOS AJOUTÉS ----------- */}
          <div className={styles.trustLogos}>
            <Image
              src="/logos/amf-logo.png"
              alt="Autorité des marchés financiers"
              height={36}
              width={70}
              priority
            />
            <Image
              src="/logos/ia-groupe-financier.png"
              alt="iA Groupe Financier"
              height={36}
              width={46}
              priority
            />
            <Image
              src="/logos/nordea-conseil.png"
              alt="Nordéa Conseil"
              height={46}
              width={46}
              priority
            />
          </div>
          {/* ------------------------------------ */}








          {/* ----------- TIMER AJOUTÉ ----------- */}
          <CountdownTimer initialMinutes={4.5} />

          <div className={styles.header}>
            <h2>Votre analyse gratuite, en moins d’une minute.</h2>
            <p>
              Quelques réponses suffisent pour recevoir votre estimation
              personnalisée.
            </p>
          </div>

          <div className={styles.progress} aria-hidden="true">
            <div className={styles.progressBar} />
            <span className={styles.progressLabel}>Étape 1 sur 2</span>
          </div>


          <form className={styles.form} onSubmit={handleSubmit}>
            {/* Nom complet */}
            <label className={styles.field}>
              <span>Votre nom</span>
              <input
                type="text"
                value={formData.fullName}
                onChange={handleChange('fullName')}
                required
                placeholder="Ex. Marie Tremblay"
              />
            </label>

            {/* Tranche d'âge */}
            <label className={styles.field}>
              <span>Tranche d’âge</span>
              <select
                value={formData.ageRange}
                onChange={handleChange('ageRange')}
                required
              >
                <option value="">Sélectionnez votre tranche</option>
                <option value="18-24">18 à 24 ans</option>
                <option value="25-34">25 à 34 ans</option>
                <option value="35-44">35 à 44 ans</option>
                <option value="45-54">45 à 54 ans</option>
                <option value="55-64">55 à 64 ans</option>
                <option value="65+">65 ans et plus</option>
              </select>
            </label>

            {/* Courriel */}
            <label className={styles.field}>
              <span>Courriel</span>
              <input
                type="email"
                value={formData.email}
                onChange={handleChange('email')}
                required
                placeholder="Ex. vous@exemple.com"
              />
            </label>

            {/* Téléphone */}
            <label className={styles.field}>
              <span>Téléphone</span>
              <input
                type="tel"
                value={formData.phone}
                onChange={handleChange('phone')}
                required
                placeholder="Ex. 514 555-1234"
              />
            </label>

            {/* Assurance hypothécaire */}
            <label className={styles.field}>
              <span>Avez-vous déjà une assurance hypothécaire ?</span>
              <select
                value={formData.insured}
                onChange={handleChange('insured')}
              >
                <option value="Oui">Oui</option>
                <option value="Non">Non</option>
              </select>
            </label>

            <button className="cta-button" type="submit" disabled={isSubmitting}>
              {isSubmitting
                ? 'Analyse en cours…'
                : 'Voir combien je peux économiser →'}
            </button>

            <p className={styles.notice}>
              🔒 Données 100 % confidentielles, aucun engagement.
            </p>

            {status === 'success' && (
              <p className={styles.success}>
                Merci ! Votre analyse gratuite est en préparation.
              </p>
            )}
            {status === 'error' && (
              <p className={styles.error}>
                Une erreur est survenue, veuillez réessayer.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormSection;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}
