import React from 'react';
import '../styles/Studies.css';

const Studies = ({ id, studies }) => {
    return (
        <div id={id} className="section studies">
            <h2 className="section-title">Tanulmányok</h2>
            <div className="studies-list">
                {studies.map((study, index) => (
                    <div key={index} className="study-card">
                        <h3 className="degree">{study.degree}</h3>
                        <p className="university">{study.university}</p>
                        <p className="year">{study.year}</p>
                        <ul className="courses">
                            {study.courses.map((course, i) => (
                                <li key={i}>{course}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Studies;
