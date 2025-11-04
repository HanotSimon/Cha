import React, { useEffect, useRef, useState } from "react";
import "./FireFlies.css";

interface Firefly {
    x: number;
    y: number;
    vx: number;
    vy: number;
    alpha: number;
    size: number;
    life: number;
}

const FireFlies: React.FC = () => {
    const [fireflies, setFireflies] = useState<Firefly[]>([]);
    const mousePos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const maxParticles = 150;

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener("mousemove", handleMouseMove);

        const animate = () => {
            setFireflies(prev => {
                const newFireflies: Firefly[] = [];
                for (let i = 0; i < 3; i++) {
                    if (prev.length + newFireflies.length < maxParticles) {
                        newFireflies.push({
                            x: mousePos.current.x + (Math.random() - 0.5) * 10,
                            y: mousePos.current.y + (Math.random() - 0.5) * 10,
                            vx: (Math.random() - 0.5) * 1,
                            vy: (Math.random() - 0.5) * 1,
                            alpha: 1,
                            size: 2 + Math.random() * 3,
                            life: 80 + Math.random() * 40,
                        });
                    }
                }

                const updated = [...prev, ...newFireflies].map(f => {
                    f.x += f.vx;
                    f.y += f.vy;

                    f.vx += (Math.random() - 0.5) * 0.1;
                    f.vy += (Math.random() - 0.5) * 0.1;
                    f.vx *= 0.92;
                    f.vy *= 0.92;

                    f.life -= 1;
                    f.alpha = Math.max(0, f.life / 100);

                    return f;
                });

                return updated.filter(f => f.life > 0);
            });

            requestAnimationFrame(animate);
        };

        animate();

        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="fireflies-container">
            {fireflies.map((f, i) => (
                <div
                    key={i}
                    className="firefly"
                    style={{
                        width: `${f.size}px`,
                        height: `${f.size}px`,
                        transform: `translate(${f.x}px, ${f.y}px)`,
                        opacity: f.alpha,
                    }}
                />
            ))}
        </div>
    );
};

export default FireFlies;
