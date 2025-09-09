import { useState, useEffect } from "react";
import "./HeartAnimation.css";

const HeartAnimation = () => {
    const initial = ["|","I"," ","L","O","V","E"," ","Y","O","U","|"];
    const steps = [
        ["|","I"," ","L","O","V","E"," ","Y","O","U","|"],
        ["|","I","❤️","Y","O","U","|"],
        ["|","I","❤️","U","|"],
        ["|","❤️","|"]
    ];

    const [stepIndex, setStepIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStepIndex(prev => (prev + 1) % steps.length);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const target = steps[stepIndex];
    const maxLen = initial.length;

    return (
        <div className="heart-wrapper">
            <div className="heart-container">
                {Array.from({ length: maxLen }).map((_, i) => (
                    <span className="heart-letter" key={i}>
          {target[i] ?? ""}
        </span>
                ))}
            </div>
        </div>
    );
}

export default HeartAnimation;