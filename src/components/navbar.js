import React, { useEffect } from 'react';
import './navbar.css';

function Navbar() {
    useEffect(() => {
        const navLinks = document.querySelectorAll('.ul li a');

        navLinks.forEach(link => {
            link.addEventListener('mouseover', () => {
                navLinks.forEach(otherLink => {
                    if (otherLink !== link) {
                        otherLink.classList.add('dimmed');
                    }
                });
            });

            link.addEventListener('mouseout', () => {
                navLinks.forEach(otherLink => {
                    otherLink.classList.remove('dimmed');
                });
            });
        });

        return () => {
            navLinks.forEach(link => {
                link.removeEventListener('mouseover', () => {});
                link.removeEventListener('mouseout', () => {});
            });
        };
    }, []);

    return (
        <>
            <header className="header">
                <a href="#home" className="logo">Yashraj_.</a>
                <nav className="navbar">
                    <ul className="ul">
                        <li><a href="#home">
                            <p className='num'>01</p>//home</a></li>
                        <li><a href="#expertise"><p className='num'>02</p>//expertise</a></li>
                        <li><a href="#work"><p className='num'>03</p>//work</a></li>
                        {/* <li><a href="#experience">//experience</a></li> */}
                        <li><a href="#contact"><p className='num'>04</p>//contact</a></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Navbar;
