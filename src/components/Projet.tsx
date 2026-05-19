import Title from "./Title"
import imgPei from "../assets/pei.jpg"
import imgOtaku from "../assets/otaku.png"
import imgUniPrice from "../assets/uniPrice.jpg"
import imgEasyProcess from "../assets/ep.png"
import {Link } from "lucide-react"
import { FaGithub } from "react-icons/fa";
const Projets = [
    {
        id: 1,
        nom: "Easy Process",
        description: "Application universitaire qui simplifie et sécurise la gestion des demandes administratives. Elle permet aux étudiants de soumettre en ligne leurs demandes (stage, diplôme, relevé de notes, recommandation, fréquentation) et à l’administration de les traiter rapidement, avec sécurité, traçabilité et communication simplifiée.",
        technologies: [
            "Node Js", "Express Js", "Bootstrap", "MongoDB"
        ],
        demoLink: "",
        repoLink: "",
        image: imgEasyProcess
    },

    {
        id: 2,
        nom: "Otaku Mali",
        description: "Plateforme communautaire dédiée à la culture otaku au Mali. Elle présente les événements et l’actualité liés aux mangas, animes et jeux vidéo, tout en offrant un espace e-commerce pour l’achat d’articles otaku. Le blog favorise la découverte, l’échange et la participation des passionnés, avec une interface moderne et intuitive qui combine information, divertissement et shopping.",
        technologies: [
            "React", "Tailwind CSS", "Node Js", "Express Js", "MongoDB"
        ],
        demoLink: "",
        repoLink: "",
        image: imgOtaku
    },
    {
        id: 3,
        nom: "P E I",
        description: "La poubelle Ecologique Intelligente est un  Projet écologique basé sur Arduino qui optimise la gestion des déchets. L’équipement détecte automatiquement le niveau de remplissage de la poubelle et envoie une notification par SMS à l’équipe de ramassage. Ce système intelligent améliore l’efficacité de la collecte, réduit les débordements et contribue à un environnement plus propre et durable.",
        technologies: [
            "Arduino", "Capteurs ultrasoniques", "Module GSM", "C/C++"
        ],
        demoLink: "",
        repoLink: "",
        image: imgPei
    },
    {
        id: 4,
        nom: "UniPrice",
        description: "Application web conçue pour harmoniser les prix du transport de marchandises entre les transporteurs maliens opérant en Mauritanie. L’administrateur enregistre et met à jour les tarifs officiels, accessibles à tous les acteurs du secteur. Les transporteurs et les clients peuvent consulter ces prix en ligne, garantissant transparence, équité et régulation du marché. Le système favorise la confiance, réduit les litiges et contribue à une meilleure organisation du secteur logistique transfrontalier.",
        technologies: [
            "React", "Tailwind CSS", "Node Js", "Express Js", "MongoDB"
        ],
        demoLink: "",
        repoLink: "",
        image: imgUniPrice
    }




]

const Projet = () => {
    return (
        <div className="mt-10 ">
            <Title title="Projets" />
            <div className="grid md:grid-cols-3 gap-4 ">
                {Projets.map((projet) => (
                    <div className=" bg-base-300 p-5 h-fit rounded-xl shadow-lg h-full flex flex-col justify-between " key={projet.id}>
                        <img
                            src={projet.image}
                            alt={projet.nom}
                            className="w-full rounded-xl h-56 object-cover"
                        />
                        <div className="">
                            <h1 className="my-2 text-2xl font-bold text-white">
                                {projet.nom}
                            </h1>
                            <p>{projet.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-2 my-3">
                            {projet.technologies.map((tech) => (
                                <span className="badge badge-accent">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-2 justify-center mt-5">
                            <a href={projet.demoLink} className="btn btn-accent font-bold flex-2 " >Demo  <Link /></a>
                           <a href={projet.repoLink} className="btn btn-neutral font-bold flex-1 ml-2" >  <FaGithub className="text-3xl" /> Repo</a>
                        </div>


                    </div>

                ))}
            </div>
        </div>
    )
}
export default Projet