import { useEffect, useRef } from "react";
import "./TimeLine.css";
import image1 from "@/assets/timeline/image1.jpg";
import image2 from "@/assets/timeline/image2.jpg";
import image3 from "@/assets/timeline/image3.jpg";
import image4 from "@/assets/timeline/image4.gif";
import image5 from "@/assets/timeline/image5.jpg";
import image6 from "@/assets/timeline/image6.jpg";
import image7 from "@/assets/timeline/image7.jpg";
import image8 from "@/assets/timeline/image8.jpg";
import image9 from "@/assets/timeline/image9.jpg";
import image10 from "@/assets/timeline/image10.jpg";

const timelineData = [
  {
    date: "1 Avril 2025",
    title: "Poisson d'avril",
    text: "Une recontre un soir, au bar, whisky à la main... ouais non plutôt sur tinder de manière légèrement gênante",
    image: image1,
  },
  {
    date: "8 Avril 2025",
    title: "Premier rendez-vous",
    text: "Premier rendez-vous à La Vie Est Belge, on a pris un Coca et un Ice Tea comme des bébés. Et je voulais t'offrir une tulipe mais y en avait plus. #loveur",
    image: image2,
  },
  {
    date: "30 Avril 2025",
    title: "Premier bisou",
    text: "Après avoir été au bowling et mangé je sais pas où on s'est posé sur un banc, j'ai fait le technique du bras et j'ai pas eu les couilles de t'embrasser. Puis juste avant que tu prennes ton bus j'ai osé t'embrasser (c'était nul)",
    image: image3
  },
  {
    date: "1 Mai 2025",
    title: "Mise en couple",
    text: "Plutôt rapide encore une fois, un mois pile après notre rencontre v'la qu'on était déjà ensemble. Ce jour là c'était la fête au village et j'étais un homme très heureux :)",
    image: image4
  },
  {
    date: "17 Juin 2025",
    title: "LE POURS",
    text: "Balade dans le bois et LE POURS ET LA POURSINETTE SONT ARRIVÉS. Finalement ils avaient juste perdu les poursineaux...",
    image: image5
  },
  {
    date: "3 Juillet 2025",
    title: "Premières vacances",
    text: "On se connait depuis un peu plus de 3 mois et on part déjà en vacances ensemble, plutôt sympa. C'était vraiment trop bien, dommage qu'il y avait un berger avec nous. (J'adore cette photo)",
    image: image6
  },
  {
    date: "6 Août 2025",
    title: "C'est ciao",
    text: "Jour de mon départ pour le Canada, on se connait depuis 4 mois et c'est déjà la séparation... J'avais beaucoup de doutes et j'avais peur de te perdre.",
    image: image7
  },
  {
    date: "23 Décembre 2025",
    title: "Rebonjour",
    text: "TADAM, me revoilà et on est toujours ensemble, wow. Mon annif, Noël, nouvel an, ... la fin d'année avec toi était vraiment top et j'étais super heureux de te revoir. (J'adore cette photo aussi)",
    image: image8
  },
  {
    date: "21 Février 2026",
    title: "Ça glisse",
    text: "Vacances au ski ensemble et encore une fois, trop content de les avoir passées avec toi. D'après moi c'était mieux que celles au chalet, pour beaucoup de raisons mais une en particulier ;) ",
    image: image9
  },
  {
    date: "Aujourd'hui",
    title: "1 an ensemble",
    text: "Et voilà, déjà un an. Je me rends vraiment pas compte, j'ai l'impression qu'on se connaît à la fois depuis 1 mois et 10 ans. Je suis si heureux de t'avoir rencontré, vraiment. Et c'est que le début... ❤️",
    image: image10
  }
];

export default function Timeline() {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries, obs) => {
        entries.forEach((entry) => {
            console.log("visible:", entry.isIntersecting);

            if (entry.isIntersecting) {
            entry.target.classList.add("show");
            obs.unobserve(entry.target);
            }
        });
        },
        {
        threshold: 0.3,
        rootMargin: "0px 0px -10% 0px",
        }
    );

    itemsRef.current.forEach((el) => {
        if (el) observer.observe(el);
    });

    return () => observer.disconnect();
    }, []);

  return (
    <div className="timeline">
      <div className="timeline-line"></div>

      {timelineData.map((item, index) => (
        <div
          ref={(el) => {
            itemsRef.current[index] = el;
            }}
          className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          key={index}
        >
          <div className="content">
            <span className="date">{item.date}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>

            <div className="image-wrapper">
              <img src={item.image} alt={item.title} />
              <div className="overlay"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
