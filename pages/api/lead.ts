import type { NextApiRequest, NextApiResponse } from 'next';

interface LeadRequestBody {
  name?: string;
  age?: string;
  postalCode?: string;
  phone?: string;
  email?: string;
  insured?: string;
}

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_NAME = 'Soumissions';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
    console.error('Missing Airtable environment variables');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  const { name, age, postalCode, phone, email, insured } = req.body as LeadRequestBody;

  if (!name || !age || !postalCode || !phone || !email || !insured) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const response = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fields: {
          Nom: name,
          Âge: age,
          Code_Postal: postalCode,
          Téléphone: phone,
          Courriel: email,
          Déjà_Assuré: insured,
          Date_Soumission: new Date().toISOString()
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Airtable error:', errorText);
      return res.status(502).json({ error: 'Failed to save data' });
    }

    return res.status(200).json({ message: 'Lead recorded' });
  } catch (error) {
    console.error('Unexpected error saving lead', error);
    return res.status(500).json({ error: 'Unexpected server error' });
  }
}
