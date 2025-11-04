import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import "./Gallery.css";

import image1 from "@/assets/galery/image1.jpg";
import image2 from "@/assets/galery/image2.jpg";
import image3 from "@/assets/galery/image3.jpg";
import image4 from "@/assets/galery/image4.jpg";
import image5 from "@/assets/galery/image5.jpg";
import image6 from "@/assets/galery/image6.jpg";
import image7 from "@/assets/galery/image7.jpg";
import image8 from "@/assets/galery/image8.jpg";



const images = [
    image1, image2, image3, image4,
    image5, image6, image7, image8,
];

const randomPosition = () => ({
    x: Math.random() * window.innerWidth - window.innerWidth / 2,
    y: Math.random() * window.innerHeight - window.innerHeight / 2,
});

const FloatingImage = ({ src }: { src: string }) => {
    const controls = useAnimation();

    const animateRandomly = async () => {
        while (true) {
            await controls.start({
                ...randomPosition(),
                transition: { duration: 3 + Math.random() * 3, ease: "easeInOut" },
            });
        }
    };

    useEffect(() => {
        animateRandomly();
    }, []);

    return (
        <motion.img
            src={src}
            alt="memory"
            className="floating-image"
            animate={controls}
            whileHover={{
                scale: 1.2,
                boxShadow: "0 0 25px rgba(255, 182, 193, 0.8)",
                transition: { duration: 0.4 },
            }}
        />
    );
};

const Gallery = () => {
    return (
        <section id="galerie" className="gallery-container">
            <h1 className="gallery-title">Nos souvenirs ❤</h1>
            {images.map((src, i) => (
                <FloatingImage key={i} src={src} />
            ))}
            <footer className="gallery-footer">(Merci aux vacances pour les photos ensemble 🙏)</footer>
        </section>
    );
};

export default Gallery;
