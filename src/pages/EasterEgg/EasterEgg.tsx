import "./EasterEgg.css";
import { useEffect } from "react";

export default function EasterEgg() {
    useEffect(() => {
        const confettiContainer = document.getElementById("confetti-container")!;
        const confettiCount = 150;

        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement("div");
            confetti.className = "confetti";
            confetti.style.left = Math.random() * 100 + "%";
            confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 60%)`;
            confetti.style.width = 5 + Math.random() * 6 + "px";
            confetti.style.height = 5 + Math.random() * 6 + "px";
            confettiContainer.appendChild(confetti);
        }

        const starsContainer = document.getElementById("stars-container")!;
        const starsCount = 50;
        for (let i = 0; i < starsCount; i++) {
            const star = document.createElement("div");
            star.className = "star";
            star.style.left = Math.random() * 100 + "%";
            star.style.top = Math.random() * 100 + "%";
            star.style.animationDuration = 1 + Math.random() * 3 + "s";
            starsContainer.appendChild(star);
        }
    }, []);

    return (
        <div className="easter-egg-wrapper">
            <div id="confetti-container"></div>
            <div id="stars-container"></div>

            <div className="ticket-card">
                <div className="ticket-header">
                    Bon pour rien du tout 🎁
                </div>
                <div className="ticket-body">
                    Ce ticket donne droit à rien du tout mais bien joué de l'avoir trouvé.
                    <span className="hidden-message">Mais ça peut être un bon pour un bisou allez :)</span>
                </div>
                <div className="ticket-footer">
                    Trouvé le : {new Date().toLocaleDateString()}
                </div>
            </div>
        </div>
    );
}
