import React, { useEffect, useState } from 'react';
import '../styles/DotNavigation.css';

const DotNavigation = () => {
    const sections = ['Intro', 'Experience', 'Projects', 'Studies', 'AIChat', 'Contact'];
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight / 2; // középre nézünk

            let current = 0;
            sections.forEach((id, i) => {
                const el = document.getElementById(id);
                if (el && scrollPos >= el.offsetTop) {
                    current = i;
                }
            });

            setActiveIndex(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);

    const scrollToSection = (index) => {
        const el = document.getElementById(sections[index]);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="dot-navigation">
            {sections.map((_, index) => (
                <div
                    key={index}
                    className={`dot ${index === activeIndex ? 'active' : ''}`}
                    onClick={() => scrollToSection(index)}
                ></div>
            ))}
        </div>
    );
};

export default DotNavigation;
