import React from 'react';
import './styles/App.css';
import Intro from './pages/Intro';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Studies from './pages/Studies';
import AIChat from './pages/AIChat';
import Contact from './pages/Contact';
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
