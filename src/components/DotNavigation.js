import React from 'react';
import '../styles/DotNavigation.css';

const DotNavigation = ({ activeSection, scrollToSection }) => {
  	const sections = [
    	{ id: 'intro', title: 'Kezdőlap' },
    	{ id: 'experience', title: 'Tapasztalat' },
    	{ id: 'studies', title: 'Tanulmányok' },
    	{ id: 'projects', title: 'Projektek' },
    	{ id: 'contact', title: 'Kapcsolat' }
  	];

  	return (
    	<nav className="text-navigation">
      		{sections.map((section) => (
        		<div
          			key={section.id}
          			className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
          			onClick={() => scrollToSection(section.id)}
        		>
          			<span className="nav-title">{section.title}</span>
        		</div>
      		))}
    	</nav>
  	);
};

export default DotNavigation;
