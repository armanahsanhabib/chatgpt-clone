import React from 'react';
import { BiArrowFromLeft, BiChat, BiPlus, BiSun, BiTrash, BiUser } from 'react-icons/bi';
import ChatGPT from '../assets/images/logo.png';

const NavList = (props) => {
    return (
        <li className={`${props.class} list-none flex items-center text-sm py-2 px-3 my-3 rounded hover:bg-dark-800 hover:outline hover:outline-1 hover:outline-dark-800 cursor-pointer`}>
            <div className="icon mr-3">{<props.icon />}</div>
            <div className="text">{props.text}</div>
        </li>
    );
}

const Navbar = () => {
    return (
        <div className='flex flex-col justify-between bg-dark-900 w-72 text-gray-50 p-3'>
            <section>
                <div className="flex items-center mb-4 mt-1">
                    <img src={ChatGPT} alt="ChatGPT Logo" className='h-10 w-10 mr-3' />
                    <h1 className='text-xl font-bold'>ChatGPT Clone</h1>
                </div>
                <NavList class="outline outline-1 outline-dark-700 hover:outline-dark-700 mt-0" icon={BiPlus} text="New Chat" />
                <NavList icon={BiChat} text="Use ChatGPT" />
                <NavList icon={BiChat} text="Install Tailwind" />
            </section>
            <section>
                <hr className='border border-1 border-dark-700' />
                <NavList icon={BiTrash} text="Clear Conversation" />
                <NavList icon={BiUser} text="Upgrade to PLUS" />
                <NavList icon={BiSun} text="Light Mode" />
                <NavList icon={BiArrowFromLeft} text="Log Out" />
            </section>
        </div>
    );
};

export default Navbar; 