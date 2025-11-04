import { useEffect, useState } from "react";
import "./GrowingFlower.css";

import flower1 from "@/assets/flowers/flower1.png";
import flower2 from "@/assets/flowers/flower2.png";
import flower3 from "@/assets/flowers/flower3.png";
import flower4 from "@/assets/flowers/flower4.png";
import flower5 from "@/assets/flowers/flower5.png";
import flower6 from "@/assets/flowers/flower6.png";
import flower7 from "@/assets/flowers/flower7.png";
import flower8 from "@/assets/flowers/flower8.png";

const flowerStages = [
    flower1, flower2, flower3, flower4,
    flower5, flower6, flower7, flower8
];

export default function GrowingFlower() {
    const startDate = new Date("2025-05-01T14:43:00");
    const [currentFrame, setCurrentFrame] = useState(0);
    const [maxStage, setMaxStage] = useState(0);

    // Mise à jour du stade max selon le temps passé
    useEffect(() => {
        const updateMaxStage = () => {
            const now = new Date().getTime();
            const diffDays = (now - startDate.getTime()) / (1000 * 60 * 60 * 24);
            const stage = Math.min(Math.floor((diffDays / 365) * flowerStages.length), flowerStages.length - 1);
            setMaxStage(stage);
        };

        updateMaxStage();
        const interval = setInterval(updateMaxStage, 60 * 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    // Animation boucle avec smooth crossfade
    useEffect(() => {
        if (maxStage === 0) return;

        let timeout: NodeJS.Timeout;
        let frame = 0; // commence au stade 0

        const tick = () => {
            setCurrentFrame(frame); // affiche d'abord le stade actuel

            if (frame === maxStage) {
                // pause 3 secondes sur la dernière image
                timeout = setTimeout(() => {
                    frame = 0; // retour au début
                    tick(); // relance
                }, 3000);
            } else {
                frame++;
                timeout = setTimeout(tick, 1000); // intervalle normal
            }
        };

        tick(); // lancement initial

        return () => clearTimeout(timeout);
    }, [maxStage]);



    return (
        <>
            <div className="flower-wrapper">
                {flowerStages.map((img, idx) => (
                    <img
                        key={idx}
                        src={img}
                        alt={`Stade ${idx + 1}`}
                        className={`flower-image ${idx === currentFrame ? "active" : ""}`}
                        style={{zIndex: idx}}
                    />
                ))}
            </div>
            <p className="flower-caption">
                Stade {currentFrame + 1} / {flowerStages.length}
            </p>

        </>
    );
}
