import Title from "./Title"

import imgHtml from "../assets/html.png";
import imgCss from "../assets/css.png";
import imgJs from "../assets/js.png";
import imgBootstrap from "../assets/bootstrap.png";
import imgTailwind from "../assets/tailwind.png";
import imgReact from "../assets/react.png";
import imgNode from "../assets/nodeJs.png";
import imgExpress from "../assets/expressJs.png";
import imgPython from "../assets/python.png";
import imgArduino from "../assets/arduino.png";
import imgPs from "../assets/ps.png";
import imgAi from "../assets/ai.png";
import imgGithub from "../assets/GitHub.png";
import imgLinux from "../assets/linux.png";
import imgOffice from "../assets/office.png";
import imgLpt from "../assets/lpt.png";
import imgKodax from "../assets/kodax.png";
import imgSic from "../assets/sic.jpg";
import imgCctv from "../assets/cctv.png";

const skills = [
    { id: 1, name: "HTML", image: imgHtml },
    { id: 2, name: "CSS", image: imgCss },
    { id: 3, name: "Javascript", image: imgJs },
    { id: 4, name: "Bootstrap", image: imgBootstrap },
    { id: 5, name: "Tailwind css", image: imgTailwind },
    { id: 6, name: "React", image: imgReact },
    { id: 7, name: "Node Js", image: imgNode },
    { id: 8, name: "Express", image: imgExpress },
    { id: 9, name: "Python", image: imgPython },
    { id: 10, name: "Arduino", image: imgArduino },
    { id: 11, name: "Linux", image: imgLinux },
    { id: 12, name: "Github", image: imgGithub },
    { id: 13, name: "Photoshop", image: imgPs },
    { id: 14, name: "Illustrator", image: imgAi },
    { id: 15, name: "Videosurveillance", image: imgCctv },
    { id: 16, name: "Office", image: imgOffice },

]
const experiences = [
    {
        id: 1,
        role: "Agent polyvalent en logistique et relation client",
        Entreprise: "La paix transport",
        Image: imgLpt,
        Periode: "Fevier 2025 -- A nos jours",
        description: [
            "Gestion des flux logistiques : accueil, briefing et suivi des livraisons.",
            "Administration & reporting : traçabilité des documents, planification des transports, suivi de flotte.",
            "Support technique : maintenance informatique de premier niveau, supervision vidéosurveillance.",
            "Communication visuelle : conception de supports conformes à la charte graphique."

        ]
    },
    {
        id: 2,
        role: "Freelance – Création visuelle",
        Entreprise: "Cherif",
        // Image:imgDevSol,
        Periode: " 2022 -- A nos jours",
        description: [
            " Réalisation de visuels pour particuliers et entreprises (événements, vœux).",
            "Conception graphique adaptée aux besoins clients.",
            "Développement d’une approche créative et personnalisée en ligne."

        ]
    },
    {
        id: 3,
        role: "Stagiaire gestion de cybercafé",
        Entreprise: "Kodax",
        Image: imgKodax,
        Periode: " Fevrier 2024  -- Janvier 2025",
        description: [
            "Relation client : accueil, assistance et accompagnement administratif.",
            "Informatique : installation de systèmes, maintenance bureautique et résolution de pannes.",
            "Communication visuelle : conception d’affiches, cartes de visite, supports marketing.",
            "Formation : initiation à l’informatique, bureautique et développement web.",
            "Management : supervision quotidienne et encadrement d’une équipe de stagiaires."

        ]
    },

    {
        id: 4,
        role: "Stagiaire technicien sécurité électronique & support informatique",
        Entreprise: "Sahel Infocom",
        Image: imgSic,
        Periode: " Juin -- Aout 2022",
        description: [
            "Analyse des besoins clients en sécurité électronique.",
            "Installation et configuration de systèmes de vidéosurveillance.",
            "Maintenance et suivi des équipements informatiques et bureautiques.",
            "Garantie de la continuité des services techniques."

        ]
    },


]

const Experiences = () => {
    return (
        <div className="">
            <Title title="Experiences" />
            <div className=" flex md:flex-row flex-col-reverse items-center ">

                <div className="flex flex-wrap justify-center gap-4 md:w-1/3 md:mt-0 p-2 ">
                    {skills.map((skills) => (
                        <div className="space-x-3 flex justify-center flex-col items-center " key={skills.id}>
                            <div className="w-25 h-25  border-accent border-3 rounded-full">
                                <img src={skills.image} alt={skills.name} className=" hfull w-full  rounded-full p-3 " />
                            </div>
                            <span className="mt-2 text-sm ">{skills.name}</span>
                        </div>
                    ))}
                </div>
                <div className="md:ml space-y-5 flex flex-col p-5 ">
                    {experiences.map((experience) => (
                        <div key={experience.id} className="bg-base-200 rounded-xl p-5 ">
                            <div className="flex items-center  ">
                                <img src={experience.Image} alt={experience.Entreprise} className="w-40 h-20 " />
                                <div className="ml-4 flex align-center flex-col">
                                    <h1 className="text-accent font-bold text-2xl">{experience.Entreprise}, <span className="text-accent font-bold text-xl px-4">{experience.role}</span></h1>
                                    <span className="text-sm pt-2">{experience.Periode}</span>
                                </div>

                            </div>

                            <ul className="list-disc ml-16 mt-2">
                                {experience.description.map((desc, index) => (
                                    <li key={index}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Experiences