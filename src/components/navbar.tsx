import { Package  } from 'lucide-react';

const Navbar = () => {
    return (
        <div className='flex justify-center md:justify-between items-center p-4'>
            <a href="" className='flex items-center  text-3x1 md:text-2x1'>
                <Package  /> <span className='font-bold'>CHERIF</span>
                <span className='text-accent font-bold text-3x2 md:text-4x1' >DEV</span>
            </a>
            <ul className="hidden md:flex space-x-4">
                <li>
                    <a href="#Home" className="btn btn-sm btn-gosht">Accueil</a>
                </li> 
                <li>
                    <a href="#About" className="btn btn-sm btn-gosht">A propos</a>
                </li>
                <li>
                    <a href="#Experiences" className="btn btn-sm btn-gosht">Mes experiences</a>
                </li>
                <li>
                    <a href="#Projets" className="btn btn-sm btn-gosht">Mes Projets</a>
                </li>
            </ul>

        </div>
    )
}

export default Navbar

