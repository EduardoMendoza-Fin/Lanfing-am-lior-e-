import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './Form.module.css';

type SubmissionStatus = 'idle' | 'success' | 'error';

type FormData = {
  fullName: string;
  age: string;
  postalCode: string;
  phone: string;
  email: string;
  insured: 'Oui' | 'Non';
};

const initialData: FormData = {
  fullName: '',
  age: '',
  postalCode: '',
  phone: '',
  email: '',
  insured: 'Oui'
};

const FormSection = () => {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<SubmissionStatus>('idle');

  const handleChange = (field: keyof FormData) => (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.fullName,
          age: formData.age,
          postalCode: formData.postalCode,
          phone: formData.phone,
          email: formData.email,
          insured: formData.insured
        })
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setStatus('success');
      setFormData(initialData);

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
    <section className={`section ${styles.wrapper}`} id="formulaire">
      <div className="container">
        <div className={styles.card}>
          <div className={styles.header}>
            <h2>Recevez votre analyse gratuite maintenant.</h2>
            <p>Répondez à quelques questions simples pour recevoir votre rapport personnalisé.</p>
          </div>
          <div className={styles.progress} aria-hidden="true">
            <div className={styles.progressBar} />
            <span className={styles.progressLabel}>Étape 1 sur 2</span>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.field}>
              <span>Nom complet</span>
              <input type="text" value={formData.fullName} onChange={handleChange('fullName')} required placeholder="Ex. Marie Tremblay" />
            </label>
            <label className={styles.field}>
              <span>Âge</span>
              <input type="number" min="18" value={formData.age} onChange={handleChange('age')} required placeholder="Ex. 42" />
            </label>
            <label className={styles.field}>
              <span>Code postal</span>
              <input type="text" value={formData.postalCode} onChange={handleChange('postalCode')} required placeholder="Ex. H2X 1Y4" />
            </label>
            <label className={styles.field}>
              <span>Téléphone</span>
              <input type="tel" value={formData.phone} onChange={handleChange('phone')} required placeholder="Ex. 514 555-1234" />
            </label>
            <label className={styles.field}>
              <span>Courriel</span>
              <input type="email" value={formData.email} onChange={handleChange('email')} required placeholder="Ex. vous@exemple.com" />
            </label>
            <label className={styles.field}>
              <span>Avez-vous déjà une assurance hypothécaire ?</span>
              <select value={formData.insured} onChange={handleChange('insured')}>
                <option value="Oui">Oui</option>
                <option value="Non">Non</option>
              </select>
            </label>
            <button className="cta-button" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Envoi en cours…' : 'Obtenir mon analyse gratuite'}
            </button>
            <p className={styles.notice}>🔒 Données sécurisées – aucune carte de crédit requise.</p>
            {status === 'success' && <p className={styles.success}>Merci ! Votre analyse gratuite est en préparation.</p>}
            {status === 'error' && <p className={styles.error}>Une erreur est survenue, veuillez réessayer.</p>}
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

