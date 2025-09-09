import "./index.css";
import HeartAnimation from "./components/HeartAnimation/HeartAnimation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/heart" element={<HeartAnimation />} />
            </Routes>
        </Router>
    );
}