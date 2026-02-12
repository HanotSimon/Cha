import "./HomePage.css"
import Navbar from "../../components/Navbar/Navbar.tsx";
import HeartAnimation from "@/components/HeartAnimation/HeartAnimation.tsx";
import Calendar from "@/components/Calendar/Calendar.tsx";
import GrowingFlower from "@/components/GrowingFlower/GrowingFlower.tsx";
import FireFlies from "@/components/FireFlies/FireFlies.tsx";
import Sky from "@/components/Sky/Sky.tsx";
import Gallery from "@/components/Gallery/Gallery.tsx";
import Countdown from "@/components/Countdown/Countdown.tsx";
import ComplimentGenerator from "@/components/ComplimentGenerator/ComplimentGenerator.tsx";
import CompatibilityWidget from "@/components/Compatibility/Compatibility.tsx";
import SurpriseGif from "@/components/SurpriseGif/SurpriseGif.tsx";
import { motion } from "framer-motion";
import ChillForest from "@/components/ChillForest/ChillForest.tsx";
import EasterEggConsole from "@/components/EasterEggConsole/EasterEggConsole.tsx";
import SaintValentin from "@/components/SaintValentin/SaintValentin.tsx";

const HomePage = () => {
    return (
        <>
            <FireFlies/>
            <Navbar/>
            <SurpriseGif/>
            <EasterEggConsole/>

            <div className="home">

                {/* HEADER */}
                <motion.header
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 60, damping: 20 }}
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ type: "spring", stiffness: 55, damping: 22, delay: 0.2 }}
                        whileHover={{ scale: 1.04 }}
                    >
                        Bienvenue sur ton site 🎉
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 55, damping: 22, delay: 0.35 }}
                    >
                        Ce site est un petit site cringe pour toi fait maison.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 55, damping: 22, delay: 0.5 }}
                        whileHover={{ scale: 1.03, x: 3 }}
                    >
                        J'ai essayé de faire de mon mieux pour qu'il soit pas trop ignoble :)
                    </motion.p>
                </motion.header>

                {/* GROSSE SECTIONS – simple apparition */}
                <motion.div
                    className="calendar-wrapper"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ type: "spring", stiffness: 60, damping: 20 }}
                >
                    <Calendar/>
                    <GrowingFlower/>
                </motion.div>

                <motion.div
                    className="sky-wrapper"
                    initial={{opacity: 0, y: 40}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, margin: "-80px"}}
                    transition={{type: "spring", stiffness: 60, damping: 20, delay: 0.1}}
                >
                    <div style={{width: "100%", height: "450px", position: "relative"}}>
                        <Sky/>
                    </div>
                </motion.div>


                <motion.section
                    id="galery"
                    initial={{opacity: 0, y: 40}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, margin: "-80px"}}
                    transition={{type: "spring", stiffness: 60, damping: 20, delay: 0.2}}
                >
                <Gallery/>
                </motion.section>

                <motion.div
                    className="countdown-wrapper"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.3 }}
                >
                    <Countdown/>
                </motion.div>

                <motion.div
                    id="compliments"
                    className="compliment-wrapper"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.4 }}
                >
                    <ComplimentGenerator/>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.5 }}
                >
                    <HeartAnimation/>
                </motion.div>

                <motion.div
                    id="compatibility"
                    className="compatibility-wrapper"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.6 }}
                >
                    <CompatibilityWidget/>
                </motion.div>

                <motion.div
                    id="chillforest"
                    className="chillforest-wrapper"
                    initial={{opacity: 0, y: 40}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, margin: "-80px"}}
                    transition={{type: "spring", stiffness: 60, damping: 20, delay: 0.7}}
                >
                    <ChillForest/>
                </motion.div>

                <motion.div
                    id="saint-valentin"
                    className="saint-valentin-wrapper"
                    initial={{opacity: 0, y: 40}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, margin: "-80px"}}
                    transition={{type: "spring", stiffness: 60, damping: 20, delay: 0.8}}
                >
                    <SaintValentin/>
                </motion.div>
            </div>
        </>
    )
}

export default HomePage;