import React, { useEffect, useState, useMemo } from 'react';
import '../styles/DotNavigation.css';

const DotNavigation = () => {
    const sections = useMemo(() => ['Intro', 'Experience', 'Projects', 'Studies', 'AIChat', 'Contact'], []);

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const wrapper = document.querySelector('.app-wrapper');
        if (!wrapper) return;

        const handleScroll = () => {
            const scrollPos = wrapper.scrollTop + wrapper.clientHeight / 2;

            let current = 0;
            sections.forEach((id, i) => {
                const el = document.getElementById(id);
                if (el && scrollPos >= el.offsetTop) {
                    current = i;
                }
            });

            setActiveIndex(current);
            console.log('scrolling', current, scrollPos);
        };

        wrapper.addEventListener('scroll', handleScroll);
        return () => wrapper.removeEventListener('scroll', handleScroll);
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
