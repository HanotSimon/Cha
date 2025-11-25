import { useEffect, useState } from "react";
import "./Calendar.css";

const Calendar = () => {
    const startDate = new Date("2025-05-01T14:49:00");

    const [timePassed, setTimePassed] = useState({
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const diff = now.getTime() - startDate.getTime();

            // --- Calcul temps écoulé ---
            const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
            const totalMonths =
                (now.getFullYear() - startDate.getFullYear()) * 12 +
                (now.getMonth() - startDate.getMonth());

            const remainingDays = Math.floor(
                totalDays -
                (totalMonths *
                    (365.25 / 12)) // moyenne des jours par mois
            );

            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            setTimePassed({
                months: totalMonths,
                days: remainingDays >= 0 ? remainingDays : 0,
                hours,
                minutes,
                seconds,
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="calendar-container">
            <h2 className="calendar-title">Ensemble depuis :</h2>
            <div className="calendar-time">
                <div className="time-box">
                    <span className="time-number">{timePassed.months}</span>
                    <span className="time-label">mois</span>
                </div>
                <div className="time-box">
                    <span className="time-number">{timePassed.days}</span>
                    <span className="time-label">jours</span>
                </div>
                <div className="time-box">
                    <span className="time-number">{timePassed.hours}</span>
                    <span className="time-label">heures</span>
                </div>
                <div className="time-box">
                    <span className="time-number">{timePassed.minutes}</span>
                    <span className="time-label">minutes</span>
                </div>
                <div className="time-box">
                    <span className="time-number">{timePassed.seconds}</span>
                    <span className="time-label">secondes</span>
                </div>
            </div>
            <p className="calendar-footer">(environ)</p>
        </div>
    );
};

export default Calendar;
