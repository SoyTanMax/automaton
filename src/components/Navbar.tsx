import React, { useState } from 'react';
import { Button } from './Button';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleConnectWallet = () => {
    }

    return (
        <nav className="bg-black bg-opacity-25 backdrop-filter backdrop-blur-[3.5px] text-white absolute top-0 w-full">
            <div className="max-w-none mx-auto px-4">
                <div className="flex justify-between w-full">
                    <div className="flex space-x-4 justify-between w-full">
                        <div>
                            <a href="/" className="flex items-center py-5 px-2 text-gray-700">
                                <img src='src/assets/automatonLogo.svg' />
                            </a>
                        </div>
                        <div className="hidden md:flex items-center space-x-1">
                            <a href="/collections" className="py-5 px-3">Explore collections</a>
                            <a href="#" className="py-5 px-3">About us</a>
                            <Button variant='secondary' onClick={handleConnectWallet}>Connect wallet</Button>
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="mobile-menu-button">
                            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">Home</a>
                <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">About</a>
                <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">Services</a>
                <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">Contact</a>
            </div>
        </nav>
    );
};
