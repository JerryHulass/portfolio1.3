import React from 'react';
import Icon from '@mdi/react';
import { mdiGithub, mdiLinkedin, mdiYoutube} from '@mdi/js';
// import { Link } from "react-router-dom";


const NavButton = () => {
    const [isOpen, setIsOpen] = React.useState(false);

const toggleMenu = () => {
    setIsOpen(!isOpen);
}

    return (
        <div>
        {!isOpen && (
            <button onClick={toggleMenu} className="fixed top-[10svh] right-10 -translate-y-1/2 w-28 h-28 square-full bg-transparent overflow-hidden z-50">
                <div className="w-24 2xl:w-28 h-4 bg-[#B22222] mb-3"></div>
                <div className="w-24 2xl:w-28 h-4 bg-[#B22222] mb-3"></div>
                <div className="w-24 2xl:w-28 h-4 bg-[#B22222] mb-3"></div>
            </button>
        )}

        {isOpen && (
            <div className="fixed top-[5svh] right-10 w-1/3 bg-[#B22222] z-50 grid grid-cols-2">
                <div>
                    <ul>
                        <li className="p-2">Menu Item 1</li>
                        <li className="p-2 ">Menu Item 2</li>
                        <li className="p-2">Menu Item 3</li>
                    </ul>
                </div>
                 <div className='text-right pr-10 pt-5'>
                    <button
                        onClick={toggleMenu}
                        className="overflow-hidden z-50 font-anton text-white text-4xl"
                    >
                        Close
                    </button>
                </div>
                <div className='flex p-3 gap-5'>
                    <Icon path={mdiGithub} size={3} />
                    <Icon path={mdiLinkedin} size={3} />
                    <Icon path={mdiYoutube} size={3} />
                </div>
            </div>
            
        )}
        </div>
    )
}

export default NavButton;   