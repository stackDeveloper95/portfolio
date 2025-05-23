import React from 'react';




const ProjectsPage = () => {
    const projects = [
        {
            title: 'AI Therapy',
            description: 'AI-powered therapy sessions for better mental health.',
            imgSrc: 'https://cdn.pixabay.com/photo/2016/11/14/04/45/artificial-intelligence-1822449_960_720.jpg',
            link: '#',
            framework: 'React + fast API',
            techStack: 'React, MongoDB, Express.js, Bootstrap',
        },
        {
            title: 'AI-powered Project Portal',
            description: 'An AI-driven portal to manage projects, teams, and insights with analytics and intelligent suggestions.',
            imgSrc: 'https://tse2.mm.bing.net/th?id=OIP.C4pl5AarsvDQvF1_Im2idAHaFF&pid=Api&P=0&h=180',
            link: '#',
            framework: 'React + convex',
            techStack: 'React, convex DB,LangChain',
        },
        {
            title: 'Encrypted Chat App',
            description: 'End-to-end encrypted chat for seamless and secure college communication.',
            imgSrc: 'https://herobot.app/wp-content/uploads/2022/11/11-Reasons-Why-A-Chat-Application-Is-Great-For-Business_1.jpg',
            link: '#',
            framework: 'React Native +  Node.js',
            techStack: 'React Native, Mongo DB, End-to-End Encryption, Expo',
        },
    ];

    return (
        <div className="container my-5" style={{ width: "90vw", borderRadius: "12px", padding: "30px" }}>
            <h2 className="text-center mb-4 fw-bold">
                Look at my recent projects
                <span className="d-block mx-auto border-bottom border-dark" style={{ width: '90px', paddingTop: "10px" }}></span>
            </h2>

            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {projects.map((project, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <div className="d-flex flex-column align-items-center text-center p-4">
                                {/* <img
                                    src={project.imgSrc}
                                    className="d-block mb-4"
                                    alt={project.title}
                                    style={{ maxHeight: '300px', borderRadius: '10px', objectFit: 'cover' }}
                                /> */}
                                <h3>{project.title}</h3>
                                <p className="px-3" style={{ maxWidth: "700px" }}>{project.description}</p>
                                <p><strong>Framework:</strong> {project.framework}</p>
                                <p><strong>Tech Stack:</strong> {project.techStack}</p>
                                <a href={project.link} className="btn btn-dark mt-2">View Details</a>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default ProjectsPage;
