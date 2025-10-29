import { useEffect, useState } from "react";
import styles from "./CountdownTimer.module.css"; // ← ajout de l'import du CSS module

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
    <div className={styles.timerBox}>
      ⏳ Votre analyse gratuite est disponible pendant encore{" "}
      <strong>
        {minutes}:{seconds.toString().padStart(2, "0")}
      </strong>
    </div>
  );
}
