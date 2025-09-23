import React from 'react';
import './styles/App.css';
import Intro from './components/Intro';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Studies from './components/Studies';
import AIChat from './components/AIChat';
import Contact from './components/Contact';
import DotNavigation from './components/DotNavigation';

const experiences = [
    {
        title: 'Frontend Developer Intern',
        company: 'Clarity Consulting Kft.',
        duration: '2024.06 - 2024.08',
        description:
            'Fejlesztettem webes alkalmazásokat React és Node.js használatával, részt vettem a teljes projekt életciklusban.',
    },
    {
        title: 'Web Development Project',
        company: 'University Project',
        duration: '2024.02 - 2024.05',
        description: 'Csapatban készítettünk egy webshop alkalmazást Angular és Firebase használatával.',
    },
];

const projects = [
    {
        name: 'Webshop App',
        description: 'Angular és Firebase alapú webáruház projekt az egyetemen.',
        github: 'https://github.com/revmarci/webshop',
        demo: '#',
    },
    {
        name: 'Portfolio Site',
        description: 'Ez a személyes portfólió oldalam React és Node.js használatával.',
        github: 'https://github.com/revmarci/my-portfolio',
        demo: 'https://revmarci.github.io/',
    },
];

const studies = [
    {
        degree: 'Programtervező informatikus',
        university: 'Szegedi Tudományegyetem',
        year: '2. évfolyam',
        courses: ['Adatstruktúrák és algoritmusok', 'Webfejlesztés', 'Adatbázisok', 'Python programozás'],
    },
];

function App() {
    return (
        <div className="app-wrapper">
            <Intro id="Intro" />
            <Experience id="Experience" experiences={experiences} />
            <Projects id="Projects" projects={projects} />
            <Studies id="Studies" studies={studies} />
            <AIChat id="AIChat" />
            <Contact id="Contact" email="reveszmarton16@gmail.com" phone="+36 70 222 4230" chatLink="#" />
            <DotNavigation />
        </div>
    );
}

export default App;
