import React from 'react';
import './styles/App.css';
import Intro from './components/Intro';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Studies from './components/Studies';
import AIChat from './components/AIChat';
import Contact from './components/Contact';
import DotNavigation from './components/DotNavigation';
import { experiences } from './assets/experiences';
import { projects } from './assets/projects';
import { studies } from './assets/studies';

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
