import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import alu from "./alu.jpeg";
import image from "./image.png";
import campus from "./campus.png";
import ther from "./ther.png";

const ProjectsPage = () => {
    const projects = [
        {
            title: 'AI Therapy',
            description: 'AI-powered therapy sessions for better mental health.',
            imgSrc: ther,
            link: '#',
            framework: 'React + FastAPI',
            techStack: 'React, MongoDB, Express.js, Bootstrap',
        },
        {
            title: 'AI-powered Project Portal',
            description: 'An AI-driven portal to manage projects, teams, and insights with analytics and intelligent suggestions.',
            imgSrc: image,
            link: 'https://citfront.vercel.app/',
            framework: 'React + Convex',
            techStack: 'React, Convex DB, LangChain',
        },
        {
            title: 'Encrypted Chat App',
            description: 'End-to-end encrypted chat for seamless and secure college communication.',
            imgSrc: campus,
            link: '#',
            framework: 'React Native + Node.js',
            techStack: 'React Native, MongoDB, End-to-End Encryption, Expo',
        },
        {
            title: 'Aluminium AI Strength Predictor',
            description: 'Mobile app that predicts aluminium strength based on composition percentages, powered by AI models.',
            imgSrc: alu,
            link: 'https://expo.dev/artifacts/eas/jfoKWLcCf7rThERwCFxhVr.apk',
            framework: 'React Native + Flask',
            techStack: 'React Native, Flask API, Python (Scikit-learn), Random Forest, Multiple Regression, Expo',
        }
    ];

    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 3 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    };

    return (
        <div className=" container my-5" style={{ width: "95vw", borderRadius: "12px", padding: "30px" }}>
            <h2 className="text-center mb-4 fw-bold">
                Look at my recent projects
                <span
                    className="d-block mx-auto border-bottom border-dark"
                    style={{ width: '90px', paddingTop: "10px" }}
                ></span>
            </h2>

            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                arrows={false}
                showDots={true}
                containerClass="pb-5"
            >
                {projects.map((project, index) => (
                    <div key={index} className="p-3">
                        <div className="d-flex flex-column align-items-center text-center shadow-sm p-4 rounded bg-light bg-transparent">
                            <img
                                src={project.imgSrc}
                                alt={project.title}
                                className="mb-4 img-fluid"
                                style={{ maxHeight: "250px", borderRadius: "10px", objectFit: "cover" }}
                            />
                            <h3>{project.title}</h3>
                            <p className="px-3" style={{ maxWidth: "700px" }}>{project.description}</p>
                            <p><strong>Framework:</strong> {project.framework}</p>
                            <p><strong>Tech Stack:</strong> {project.techStack}</p>
                            <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-dark mt-2">
                                View Details
                            </a>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default ProjectsPage;
