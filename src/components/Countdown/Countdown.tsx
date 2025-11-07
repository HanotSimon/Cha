import { useState, useEffect } from "react";
import "./Countdown.css";

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    totalMs: number;
}

const Countdown: React.FC = () => {
    const [targetDate, setTargetDate] = useState<string>(() => {
        const saved = localStorage.getItem("targetDate");
        if (saved) return saved;
        const defaultDate = new Date("2025-12-23T07:55:00");
        defaultDate.setHours(defaultDate.getHours() + 1);
        return defaultDate.toISOString().slice(0, 16);
    });


    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0, totalMs: 0 });
    const [celebrate, setCelebrate] = useState(false);

    // On garde startTime fixe pour progression linéaire
    const [startTime] = useState<number>(new Date().getTime());

    const calculateTimeLeft = (): TimeLeft => {
        const now = new Date().getTime();
        const target = new Date(targetDate).getTime();
        const difference = target - now;

        if (difference <= 0) {
            setCelebrate(true);
            return { days: 0, hours: 0, minutes: 0, seconds: 0, totalMs: 0 };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
            totalMs: difference,
        };
    };

    useEffect(() => {
        const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
        return () => clearInterval(timer);
    }, [targetDate]);

    // Couleur linéaire
    const lerpColor = (startHex: string, endHex: string, t: number) => {
        const s = startHex.replace("#", "");
        const e = endHex.replace("#", "");
        const sr = parseInt(s.substring(0, 2), 16);
        const sg = parseInt(s.substring(2, 4), 16);
        const sb = parseInt(s.substring(4, 6), 16);
        const er = parseInt(e.substring(0, 2), 16);
        const eg = parseInt(e.substring(2, 4), 16);
        const eb = parseInt(e.substring(4, 6), 16);
        const r = Math.round(sr + (er - sr) * t);
        const g = Math.round(sg + (eg - sg) * t);
        const b = Math.round(sb + (eb - sb) * t);
        return `rgb(${r},${g},${b})`;
    };

    const totalDuration = Math.max(new Date(targetDate).getTime() - startTime, 1);
    const percent = 1 - Math.max(timeLeft.totalMs / totalDuration, 0);
    const bgColor = lerpColor("#ffccd9", "#ff1a5a", percent);

    return (
        <div className="countdown-wrapper">
            <div className="date-picker">
                <input
                    type="datetime-local"
                    value={targetDate}
                    onChange={(e) => {
                        setTargetDate(e.target.value);
                        localStorage.setItem("targetDate", e.target.value);
                        setCelebrate(false);
                    }}
                />
            </div>

            <div className="countdown-box" style={{ background: bgColor }}>
                <h2>On se revoit dans</h2>
                <div className="time-boxes">
                    <div className="time-box">
                        <span className="time-number">{timeLeft.days}</span>
                        <span className="time-label">Jours</span>
                    </div>
                    <div className="time-box">
                        <span className="time-number">{timeLeft.hours}</span>
                        <span className="time-label">Heures</span>
                    </div>
                    <div className="time-box">
                        <span className="time-number">{timeLeft.minutes}</span>
                        <span className="time-label">Minutes</span>
                    </div>
                    <div className="time-box">
                        <span className="time-number">{timeLeft.seconds}</span>
                        <span className="time-label">Secondes</span>
                    </div>
                </div>
            </div>

            {celebrate && (
                <>
                    <div className="celebrate-message">
                        Yeaah enfin ensemble ! 🎉
                    </div>
                    <div className="hearts-container">
                        {Array.from({ length: 50 }).map((_, i) => (
                            <span
                                key={i}
                                className="heart"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    animationDuration: `${2 + Math.random() * 3}s`,
                                    fontSize: `${16 + Math.random() * 24}px`,
                                    animationDelay: `${Math.random() * 2}s`,
                                }}
                            >
                    💖
                </span>
                        ))}
                    </div>
                </>
            )}


        </div>
    );
};

export default Countdown;
