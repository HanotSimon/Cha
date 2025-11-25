import HomePage from "@/pages/Home/HomePage";
import LoginPage from "@/pages/Login/LoginPage";
import { useState } from "react";
import "@/index.css";

export default function App() {
    const [isLogged, setIsLogged] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleLogin = (answer: string) => {
        if (answer == "01-05-2025") {
            setIsLogged(true);
        } else {
            setError("Mauvaise réponse, t'es bête ou quoi ??");
            setTimeout(() => setError(null), 5000);
        }
    };

    if (isLogged) {
        return (
            <>
                <HomePage />
            </>
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
