import React from 'react';

const NavBar: React.FC = () => {
    return (
        <nav className="fixed top-3 p-3 w-3/5 rounded-xl z-10" style={{ backgroundColor: 'var(--card-color)' }}>
            <ul className="flex justify-around items-center">
            <li className="navbar-item font-bold hover:bg-green-900 rounded-md p-2 "><a href="#home ">Home</a></li>
            <li className="navbar-item font-bold hover:bg-green-900 rounded-md p-2"><a href="#about">About</a></li>
            <li className="navbar-item font-bold hover:bg-green-900 rounded-md p-2"><a href="#projects">Projects</a></li>
            <li className="navbar-item font-bold hover:bg-green-900 rounded-md p-2"><a href="#skills">Skills</a></li>
            <li className="navbar-item font-bold hover:bg-green-900 rounded-md p-2"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;