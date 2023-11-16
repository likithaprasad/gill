import React from 'react'
import './CSS/Footer.css'
const Footer = () => {
    const year = new Date().getFullYear();
    const author="Likitha";
    return(
        <footer className='para'>
            <p>&copy;{2023}{author}{year}.All rights resrved.</p>
            <p>Thanks for visiting my website!</p>
        </footer>
    );
}

export default Footer
