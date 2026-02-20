import React, { useEffect, useState } from 'react';
import './Anniversaire.css';

import image1 from "@/assets/birthday/image1.jpg";
import image2 from "@/assets/birthday/image2.jpg";
import image3 from "@/assets/birthday/image3.jpg";
import image4 from "@/assets/birthday/image4.jpg";
import image5 from "@/assets/birthday/image5.jpg";
import image6 from "@/assets/birthday/image6.jpg";
import image7 from "@/assets/birthday/image7.jpg";
import image8 from "@/assets/birthday/image8.jpg";
import image9 from "@/assets/birthday/image9.jpg";
import image10 from "@/assets/birthday/image10.jpg";
import image11 from "@/assets/birthday/image11.jpg";
import image12 from "@/assets/birthday/image12.jpg";
import image13 from "@/assets/birthday/image13.jpg";
import image14 from "@/assets/birthday/image14.jpg";
import image15 from "@/assets/birthday/image15.jpg";
import image16 from "@/assets/birthday/image16.jpg";

const images = [
    image1, image2, image3, image4,
    image5, image6, image7, image8,
    image9, image10, image11, image12,
    image13, image14, image15, image16
];

const Anniversaire: React.FC = () => {
  const [confettis, setConfettis] = useState<number[]>([]);
  const [stars, setStars] = useState<number[]>([]);
  const [balloons, setBalloons] = useState<number[]>([]);
  const [randomImages, setRandomImages] = useState<{src:string,left:number,top:number}[]>([]);

  useEffect(() => {
    setConfettis(Array.from({ length: 80 }, (_, i) => i));
    setStars(Array.from({ length: 30 }, (_, i) => i));
    setBalloons(Array.from({ length: 10 }, (_, i) => i));

    const columns = 4;
    const rows = 4;

    const imgs = images.map((src, index) => {
      const col = index % columns;
      const row = Math.floor(index / columns);

      return {
        src,
        left: (col + 0.5) * (100 / columns),
        top: (row + 0.5) * (100 / rows)
      };
    });

    setRandomImages(imgs);
  }, []);

  const handleClick = () => {
    window.open('https://www.nausicaa.fr', '_blank');
  };

  return (
    <div className="anniversaire-container">
      <div className="texts">
        <h1 className="title">🕺Joyeux Anniversaire 🕺</h1>
        <h2 className="subtitle">(67 ans déjà !)</h2>
        <h3>(Bientôt la maison de retraite mamy)</h3>
        <h4>(Déjà que tu fais du tricot)</h4>
        {confettis.map(i => <span key={i} className={`confetti confetti-${i % 5}`}>🎈</span>)}
        {confettis.map(i => <span key={`heart-${i}`} className={`heart heart-${i % 5}`}>❤️</span>)}
        {stars.map(i => <span key={`star-${i}`} className={`star star-${i % 5}`}>✨</span>)}
        {balloons.map(i => <span key={`balloon-${i}`} className={`balloon balloon-${i % 3}`}>🎈</span>)}
      </div>

      {randomImages.map((img, index) => (
        <img
          key={index}
          src={img.src}
          className="floating-image"
          style={{ left: `${img.left}%`, top: `${img.top}%` }}
          alt="surprise"
        />
      ))}

      <button className="surprise-btn" onClick={handleClick}>
        Clique pour ta surprise 🎁
      </button>
    </div>
  );
};

export default Anniversaire;