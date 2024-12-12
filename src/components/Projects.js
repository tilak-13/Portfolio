import React from 'react';
import '../styles/Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
    const projectData = [
        {
            title: "Hire Nepal",
            image: "/images/job.png", // Replace with your project image paths
            description: "A Job Portal website that facilitates seamless job postings, automated resume parsing and applicant ranking for employers, while providing job seekers with personalized job recommendations and a user-friendly interface to apply for their desired positions.",
            githubLink: "https://github.com/tilak-13/Hire-Nepal---Frontend",
        },
        {
            title: "Sorting Visualizer",
            image: "/images/sort.png",
            description: "Visualization of different sorting algorithms (bubble, insertion, selection, quick, merge, radix, shell, heap) using React",
            githubLink: "https://github.com/tilak-13/Sorting-Visualizer",
        },
        {
            title: "N-Queen Visualizer",
            image: "/images/nqueen.png",
            description: "Visualization of N-Queen problem in React.js. The N Queen is the problem of placing N chess queens on an N×N chessboard so that no two queens attack each other.",
            githubLink: "https://github.com/tilak-13/N-Queen-Visualizer",
        },
        {
            title: "Duel Battle",
            image: "/images/duel.png",
            description: "Duel Battle is a multiplayer game where 2 players battle against each other in three rounds with different games (Ping Pong, Space Race, Jungle Run) and try to outscore their opponents.",
            githubLink: "https://github.com/tilak-13/Duel-Battle-Game",
        },
    ];

    return (
        <section className="projects-section" id="projects">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projectData.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.image} alt={`${project.title} Screenshot`} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-icon">
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
