import { useEffect, useState } from "react";

interface CountdownTimerProps {
  initialMinutes?: number;
}

export default function CountdownTimer({ initialMinutes = 15 }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.1)",
        color: "#fff",
        padding: "10px 16px",
        borderRadius: "8px",
        textAlign: "center",
        marginBottom: "1rem",
        fontSize: "0.95rem",
      }}
    >
      ⏳ Votre analyse gratuite est disponible pendant encore{" "}
      <strong>
        {minutes}:{seconds.toString().padStart(2, "0")}
      </strong>
    </div>
  );
}
