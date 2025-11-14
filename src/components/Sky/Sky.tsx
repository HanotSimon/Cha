import React, { useEffect, useState } from "react";
import "./Sky.css";

const Sky: React.FC = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();

    let isDay: boolean;
    let progress: number;

    if (hour >= 6 && hour < 18) {
        isDay = true;
        progress = ((hour - 6) + minute / 60 + second / 3600) / 12;
    } else {
        isDay = false;
        const nightHour = hour >= 18 ? hour - 18 : hour + 6;
        progress = (nightHour + minute / 60 + second / 3600) / 12;
    }

    const xPercent = progress * 100;
    const radians = progress * Math.PI;
    const yPercent = 55 - Math.sin(radians) * 45;
    const lookAngle = (progress - 0.5) * 60;

    return (
        <div className={`sky ${isDay ? "day" : "night"}`}>
            {/* Soleil / Lune */}
            <div
                className={`celestial ${isDay ? "sun" : "moon"}`}
                style={{
                    left: `${xPercent}%`,
                    top: `${yPercent}%`,
                }}
            />

            {/* 🌤️ Nuages ou ✨ Étoiles */}
            {isDay ? (
                <>
                    <div className="cloud cloud1"></div>
                    <div className="cloud cloud2"></div>
                    <div className="cloud cloud3"></div>
                </>
            ) : (
                <div className="stars">
                    {Array.from({ length: 40 }).map((_, i) => (
                        <span key={i} className="star" />
                    ))}
                </div>
            )}

            {/* Scène du banc */}
            <div className="bench-scene">
                <div className="bench" />
                <div
                    className="person left-person"
                    style={{ transform: `rotate(${lookAngle / 2}deg)` }}
                />
                <div
                    className="person right-person"
                    style={{ transform: `rotate(${lookAngle / -2}deg)` }}
                />
            </div>
        </div>
    );
};

export default Sky;
