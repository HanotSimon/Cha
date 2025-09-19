import HeartAnimation from "./components/HeartAnimation/HeartAnimation";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import {useState} from "react";
import "./index.css";

export default function App() {
    const [isLogged, setIsLogged] = useState(false);

    const handleLogin = (answer: string) => {
        if (answer == "01-05-2025") {
            setIsLogged(true);
        } else {
            alert("Mauvaise réponse ! T'es bête ??");
        }
    };

    if (isLogged) {
        return (
            <>
                <HomePage />
                <HeartAnimation/>
            </>
        );
    }
    else{
        return (
            <LoginPage onLogin={handleLogin}/>
        );
    }
}
