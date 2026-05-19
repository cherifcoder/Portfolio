import { icons, Section } from "lucide-react"
import cherif from "../assets/me.jpeg"
import Title from "./Title"
import { ShieldCheck, Wallpaper, HardDrive } from 'lucide-react';

const aboutSection=[
    {
        id:1,
        title: "developpeur ftontend",
        description:"Je suis developpeur frontend avec une bonne experience",
        icon: <Wallpaper  className="text-accent scale-150"/>
        
    },
     {
        id:2,
        title: "developpeur backend",
        description:"Je suis developpeur backend avec une bonne experience",
        icon: <HardDrive  className="text-accent scale-150"/>
        
    },
     {
        id:3,
        title: "Passione de cybersecurite et IOT",
        description:"Je suis developpeur frontend avec une bonne experience",
        icon: <ShieldCheck className="text-accent scale-150"/>
        
    }
]
const About=()=>{
    return(
        <div className="bg-base-300 p-10 md:mb-32 ">
            <Title title="A propos"/>
            <div className="md:h-screen flex justify-center">
                <div className="hidden md:block">
                      <img src={cherif} alt="cherif" className="w-76 h-96 object-cover rounded-xl shadow-xl"/>
                </div>
                <div className="md:ml-4 space-y-4 ">
                    {aboutSection.map((Section)=>(
                        <div key={Section.id}
                        className=" flex flex-col md:flex-row items-center bg-base-200 p-5 rounded-xl shadow-xl"
                        >
                            <div className="nb-2 md:mb-0">
                                {Section.icon}
                            </div>
                            <div className=" md:ml-4 text-center md:text-left ">
                                <h2 className="text-xl font-bold mb-1">
                                    {Section.title}
                                </h2>
                                <p>
                                    {Section.description}
                                </p>
                            </div>
                        </div>

                    ))
                    }
                </div>
                
            </div>
        </div>
    )
}
export default About;
