import { useEffect, useRef } from "react";
import birthdayVideo from "@/assets/couple_anniversary.mp4";

type Props = {
    onFinish: () => void;
};

export default function AnniversaryVideo({ onFinish }: Props) {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleEnd = () => {
            onFinish();
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                video.pause();
                onFinish();
            }
        };

        video.addEventListener("ended", handleEnd);
        window.addEventListener("keydown", handleKeyDown);

        video.play().catch(() => {
            console.warn("Autoplay bloqué");
        });

        return () => {
            video.removeEventListener("ended", handleEnd);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [onFinish]);

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                background: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 9999
            }}
        >
            <video
                ref={videoRef}
                src={birthdayVideo}
                autoPlay
                controls={false}
                playsInline
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                }}
            />
        </div>
    );
}