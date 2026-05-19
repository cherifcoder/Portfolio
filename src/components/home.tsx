import { Mail } from "lucide-react";
import cherif from "../assets/me.jpeg";
const Home = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">
            <div className="flex flex-col">
                <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left">
                    Bonjour , <br />
                    Je suis {" "}
                    <span className="text-accent">Cherif S H</span>
                </h1>

                <p>
                    Programmeur frontend et backend en Licence 3,<br />
                    je fais du développement web. Je suis infographe, <br />
                    j’évolue dans le domaine du réseau et suis
                    passionne par la cybersécurité. <br />Je suis
                    dynamique et aime les défis.
                </p>
                <a href="mailto:" className="btn btn-accent"><Mail className="w-5 h-5 w-fit " />Contactez moi</a>
            </div>
            <div className="md:ml-60">
                <img src={cherif} alt="cherif" className="w-96 h-96 object-cover border-8 border-accent shadow-xl"
                    style={{
                        borderRadius: "30% 70% 70% 30% / 67% 62% 38% 33% "
                    }}
                />
            </div>
        </div>
    )
}

export default Home