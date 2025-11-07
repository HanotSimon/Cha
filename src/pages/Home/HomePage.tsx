import "./HomePage.css"
import Navbar from "../../components/Navbar/Navbar.tsx";
import HeartAnimation from "@/components/HeartAnimation/HeartAnimation.tsx";
import Calendar from "@/components/Calendar/Calendar.tsx";
import GrowingFlower from "@/components/GrowingFlower/GrowingFlower.tsx";
import FireFlies from "@/components/FireFlies/FireFlies.tsx";
import Sky from "@/components/Sky/Sky.tsx";
import Gallery from "@/components/Gallery/Gallery.tsx";
import Countdown from "@/components/Countdown/Countdown.tsx";

const HomePage = () => {
    return (
        <>
            <FireFlies/>
            <Navbar/>
            <div className="home">
                <header>
                    <h1>Bienvenue sur ton site 🎉</h1>
                    <p>
                        Ce site est un petit site cringe pour toi fait maison.
                    </p>
                    <p>
                        J'ai essayé de faire de mon mieux pour qu'il soit pas trop ignoble :)
                    </p>

                </header>

                <HeartAnimation/>

                <div className="calendar-wrapper">
                    <Calendar/>
                    <GrowingFlower/>
                </div>

                <div className="sky-wrapper">
                    <Sky/>
                </div>

                <section id="galery">
                    <Gallery/>
                </section>

                <div className={"countdown-wrapper"}>
                    <Countdown/>
                </div>

            </div>
        </>
    )
}

export default HomePage;