import React from 'react';
import '../styles/Intro.css';

const Intro = ({ id }) => {
    return (
        <div id={id} className="section intro">
            <h1 className="name">Révész Márton</h1>
            <h2 className="tagline">Aspiring Full Stack Developer</h2>
            <p className="description">
                Programtervező informatikus hallgató a Szegedi Tudományegyetemen. Szenvedélyesen fejlesztek webes
                alkalmazásokat, érdekelnek a modern frontend és backend technológiák.
            </p>
        </div>
    );
};

export default Intro;
