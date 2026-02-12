import { useState } from "react";
import "./SaintValentin.css";

interface Flower {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  stemCurve: number;
}

const colors = [
  "#FF4D94",
  "#FF1A5A",
  "#FF6B6B",
  "#FF8C8C",
  "#FFB6B9",
  "#FF6FCF",
  "#FFD36B",
  "#FFE066",
  "#FF9E66",
  "#FFB86B",
];

let flowerId = 0;
const random = (min: number, max: number) => Math.random() * (max - min) + min;

const SaintValentin: React.FC = () => {
  const [flowers, setFlowers] = useState<Flower[]>([]);
  const [showText, setShowText] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const newFlower: Flower = {
      id: flowerId++,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      size: random(50, 80),
      color: colors[Math.floor(Math.random() * colors.length)],
      stemCurve: random(-30, 30),
    };
    const newFlowers = [...flowers, newFlower];
    setFlowers(newFlowers);
    if (newFlowers.length >= 50) setShowText(true);
  };

  return (
    <div className="saint-valentin-container" onClick={handleClick}>
      {flowers.map((flower) => (
        <svg
          key={flower.id}
          className="flower"
          style={{
            left: flower.x,
            top: flower.y,
            width: flower.size,
            height: flower.size * 2,
            animationDuration: `${random(2, 3)}s`,
          }}
          viewBox="0 0 50 75"
        >
          <path
            d={`M25 75 C ${25 + flower.stemCurve} 50, ${25 - flower.stemCurve} 25, 25 0`}
            stroke="#228B22"
            strokeWidth="2"
            fill="transparent"
          />
          <circle cx="25" cy="0" r="10" fill={flower.color} />
        </svg>
      ))}

      {showText && (
        <svg className="valentine-svg" viewBox="0 0 600 100">
          <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
            Joyeuse Saint-Valentin
          </text>
        </svg>
      )}
    </div>
  );
};

export default SaintValentin;
