import { FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
const Footer = () => {
    return (
        <div className="mt-3 md:mt-9">
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content flex flex-col items-center text-center p-4 md:justify-around md:flex-row md:items-center ">
                <aside className="grid-flow-col items-center">
                    
                    <p>
                        Copyright © {new Date().getFullYear()} - Cherif Souleymane Haidara - All rights reserved
                    </p>

                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a href="mailto:cherif.so.h@gmail.com">
                        <IoMail className="text-4xl"/>
                    </a>
                    <a href="https://github.com/jinxkken" target="_blank" >
                        <FaGithub className="text-4xl"/>
                    </a>
                   
                </nav>
            </footer>
        </div>


    )
}

export default Footer