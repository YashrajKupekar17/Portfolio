import React, { useEffect, useState } from 'react';
import './navbar.css';

function Navbar() {
    const [scrollingUp, setScrollingUp] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                setScrollingUp(false);
            } else {
                setScrollingUp(true);
            }
            setLastScrollTop(scrollTop);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollTop]);

    useEffect(() => {
        const navLinks = document.querySelectorAll('.ul li a');

        const handleMouseOver = (link) => {
            navLinks.forEach(otherLink => {
                if (otherLink !== link) {
                    otherLink.classList.add('dimmed');
                }
            });
        };

        const handleMouseOut = () => {
            navLinks.forEach(otherLink => {
                otherLink.classList.remove('dimmed');
            });
        };

        navLinks.forEach(link => {
            link.addEventListener('mouseover', () => handleMouseOver(link));
            link.addEventListener('mouseout', handleMouseOut);
        });

        return () => {
            navLinks.forEach(link => {
                link.removeEventListener('mouseover', () => handleMouseOver(link));
                link.removeEventListener('mouseout', handleMouseOut);
            });
        };
    }, []);

    return (
        <header className={`header ${scrollingUp ? 'scrolling-up' : 'scrolling-down'}`}>
            <a href="#home" className="logo">Yashraj_.</a>
            <nav className="navbar">
                <ul className="ul">
                    <li><a href="#home"><p className='num'>01</p>//home</a></li>
                    <li><a href="#expertise"><p className='num'>02</p>//expertise</a></li>
                    <li><a href="#work"><p className='num'>03</p>//work</a></li>
                    <li><a href="#contact"><p className='num'>04</p>//contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
