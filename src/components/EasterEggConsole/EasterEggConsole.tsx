import { useEffect } from "react";
import ReactDOM from "react-dom/client";
import EasterEgg from "@/pages/EasterEgg/EasterEgg.tsx";

type WindowWithCommand = Window & {
    monCop1LePluBo?: () => void;
};

export default function EasterEggConsole() {
    useEffect(() => {
        const w = window as WindowWithCommand;
        w.monCop1LePluBo = () => {
            console.log("✨ Commande activée !");

            document.body.innerHTML = "";

            const rootDiv = document.createElement("div");
            document.body.appendChild(rootDiv);

            // Monte le composant EasterEgg
            const root = ReactDOM.createRoot(rootDiv);
            root.render(<EasterEgg />);
        };
    }, []);

    return null;
}
