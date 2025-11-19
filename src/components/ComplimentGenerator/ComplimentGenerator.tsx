import React, { useState } from "react";
import "./ComplimentGenerator.css";

const compliments = [
    "gentille",
    "belle",
    "drôle (parfois)",
    "attentionnée",
    "intelligente",
    "mignonne",
    "grande",
    "compréhensive",
    "unique",
    "souriante",
    "adorable",
    "rayonnante",
    "sensible",
    "douce",
    "pétillante",
    "naturelle",
    "généreuse",
    "créative",
    "pauvre",
    "chiante parfois",
    "bébé cadum",
    "trop 1er degré",
    "pense toujours avoir raison",
    "console"
];

export default function ComplimentGenerator() {
    const [complimentsList, setComplimentsList] = useState<
        { text: string; x: string; y: string; id: number }[]
    >([]);

    const generate = () => {
        const text = compliments[Math.floor(Math.random() * compliments.length)];

        const x = `${Math.random() * 300 - 150}px`;
        const y = `${Math.random() * -250}px`;

        const id = Date.now() + Math.random();

        setComplimentsList((prev) => [...prev, { text, x, y, id }]);

        // Remove after animation finishes
        setTimeout(() => {
            setComplimentsList((prev) => prev.filter((c) => c.id !== id));
        }, 2400);
    };

    return (
        <>
            <h2 className="title">Appuie pour générer un compliment (ou pas)</h2>

            <button className="btn" onClick={generate}>
                Générer un compliment
            </button>

            {complimentsList.map((c) => (
                <span
                    key={c.id}
                    className="compliment"
                    style={
                        {
                            "--x-offset": c.x,
                            "--y-offset": c.y,
                        } as React.CSSProperties
                    }
                >
          {c.text}
        </span>
            ))}
        </>
    );
}
