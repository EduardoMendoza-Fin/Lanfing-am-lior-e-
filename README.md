# Analyse gratuite assurance hypothécaire

Landing page Next.js conçue pour guider les propriétaires québécois vers une analyse gratuite de leur assurance hypothécaire.

## Démarrage

```bash
npm install
npm run dev
```

L’application sera disponible sur [http://localhost:3000](http://localhost:3000).

## Variables d’environnement

Créer un fichier `.env.local` à la racine du projet :

```
AIRTABLE_API_KEY=your_airtable_api_key
AIRTABLE_BASE_ID=your_airtable_base_id
```

La table ciblée doit se nommer `Soumissions` et contenir les champs suivants :

- `Nom`
- `Âge`
- `Code_Postal`
- `Téléphone`
- `Courriel`
- `Déjà_Assuré`
- `Date_Soumission`

## Piste d’optimisation

Intégrer le pixel Meta dans `pages/_app.tsx` ou via un gestionnaire de tags afin d’activer l’événement `fbq('track', 'Lead')` lorsque le formulaire est soumis avec succès.
