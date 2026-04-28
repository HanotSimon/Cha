import HomePage from "@/pages/Home/HomePage";
import LoginPage from "@/pages/Login/LoginPage";
import Anniversaire from "@/components/Anniversaire/Anniversaire";
import AnniversaryVideo from "@/components/AnniversaryVideo/AnniversaryVideo";
import { useState } from "react";
import "@/index.css";

export default function App() {
    const [isLogged, setIsLogged] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    const isBirthday = month === 2 && day === 28;

    const isAnniversary = month === 5 && day === 1;
    const [showVideo, setShowVideo] = useState(false);

    const handleLogin = (answer: string) => {
        if (answer == "01-05-2025" || answer == "01052025" || answer == "caca") {
            setIsLogged(true);

            if (isAnniversary) {
                setShowVideo(true);
            }
        } else {
            setError("Mauvaise réponse, t'es bête ou quoi ??");
            setTimeout(() => setError(null), 5000);
        }
    };

    if (isLogged) {
        return (
            <div>
                {isBirthday ? (
                    <Anniversaire />
                ) : showVideo ? (
                    <AnniversaryVideo onFinish={() => setShowVideo(false)} />
                ) : (
                    <HomePage />
                )}
            </div>
        );
    }

    return (
        <>
            <LoginPage onLogin={handleLogin} />
            {error && (
                <div className="error-toast">
                    {error}
                </div>
            )}
        </>
    );
}
