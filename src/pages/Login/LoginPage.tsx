import { useState } from "react";
import "./LoginPage.css";

const LoginPage = ({ onLogin }) => {
    const [answer, setAnswer] = useState("");

    const handleCheck = () => {
        onLogin(answer);
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Code secret ?</h2>
                <input
                    type="text"
                    placeholder="..-..-...."
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    className="input"
                />
                <button onClick={handleCheck} className="btn-love">
                    Valider
                </button>
            </div>
        </div>
    );
};

export default LoginPage;
