// components/NavBar.js
import Link from 'next/link';

const NavBar = () => {
    return (
        <nav>
            <Link href="/Contact">Contact</Link> | 
            <Link href="/Services">Services</Link> | 
            <Link href="/About">About Us</Link>
        </nav>
    );
};

export default NavBar;
