// components/Popup.tsx
import { useState, useEffect } from "react";

export default function Popup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Affiche la popup après 8 secondes
    const timer = setTimeout(() => setShow(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-6 bg-white shadow-lg rounded-2xl p-5 w-[320px] border border-gray-200 animate-fadeIn z-50">
      <p className="text-gray-800 text-sm mb-4">
        💬 Souhaitez-vous savoir combien vous pourriez économiser sur votre assurance hypothécaire ?
      </p>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold py-2 rounded-lg transition"
      >
        Oui, je veux mon analyse →
      </button>
      <button
        onClick={() => setShow(false)}
        className="block text-xs text-gray-500 mt-3 mx-auto hover:underline"
      >
        Non merci
      </button>
    </div>
  );
}