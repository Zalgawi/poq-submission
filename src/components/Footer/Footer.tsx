import React from 'react';
import poqLogo from '../../assets/logo/poq-logo.svg';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__text">Zayd Algawi's submission for:</p>
            <a
                href="https://poqcommerce.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img className="footer__img" src={poqLogo} alt="POQ logo" />
            </a>
        </footer>
    );
};

export default Footer;
