import {useEffect, useState } from "react";
import "./Compatibility.css";

export default function CompatibilityWidget() {
    const [compatibility, setCompatibility] = useState<number | null>(null);

    useEffect(() => {
        const today = new Date();
        const seed = today.getFullYear() + today.getMonth() + today.getDate();
        const percent = Math.floor(((seed * 37) % 100) + (seed % 13)) % 100;

        setCompatibility(percent);
    }, []);

    const getStyleClass = () => {
        if (compatibility === null) return "compat-widget neutral";

        if (compatibility >= 80) return "compat-widget high";
        if (compatibility >= 40) return "compat-widget medium";
        return "compat-widget low";
    };

    return (
        <div className={getStyleClass()}>
            <h2 className="compat-title">Compatibilité du jour</h2>

            <div className="compat-circle">
                {compatibility !== null ? `${compatibility}%` : "--"}
            </div>

            <p className="compat-note">
                (aussi fiable que les signes astro)
            </p>
        </div>
    );
}
