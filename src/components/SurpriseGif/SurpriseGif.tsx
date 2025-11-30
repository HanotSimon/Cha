import { useState, useEffect } from "react";
import "./SurpriseGif.css";

export default function SurpriseGif() {
    const [gifUrl, setGifUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const link = document.getElementById("surprise-link");
        if (!link) return;

        const handleClick = async (e: MouseEvent) => {
            e.preventDefault();
            setLoading(true);

            try {
                const apiKey = "OewCxZDpuV0qvBXvZH8Lesxt3RF0C6yn"; // ta clé Giphy
                const response = await fetch(
                    `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=loves&rating=g`
                );
                const data = await response.json();

                if (data?.data?.images?.original?.url) {
                    setGifUrl(data.data.images.original.url);
                    // Disparaît après 3 secondes
                    setTimeout(() => setGifUrl(null), 3000);
                }
            } catch (err) {
                console.error(err);
                setGifUrl(null);
            } finally {
                setLoading(false);
            }
        };

        link.addEventListener("click", handleClick);
        return () => link.removeEventListener("click", handleClick);
    }, []);

    return (
        <>
            {loading && <p className="surprise-loading">Chargement...</p>}
            {gifUrl && (
                <div className="gif-overlay">
                    <img src={gifUrl} alt="Surprise GIF" />
                </div>
            )}
        </>
    );
}
