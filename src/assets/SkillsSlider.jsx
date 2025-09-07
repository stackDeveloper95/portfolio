import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SkillsSlider = () => {
    const skills = [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
        { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Scikit-learn", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
        { name: "Visual Studio", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" },
        { name: "Eclipse", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg" },
        { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Mongoose", logo: "https://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png" },
    ];



    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 6 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
    };

    return (
        <div
            style={{ width: "80%", margin: "0 auto" }}
            className="container my-5 text-center"
        >
            <h2 className="mb-4">My Skills</h2>
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                arrows={false}
            >
                {skills.map((skill, index) => (
                    <div key={index} className="p-3">
                        <img
                            src={skill.logo}
                            alt={skill.name}
                            style={{ width: "100px", height: "100px", objectFit: "contain" }}
                        />
                        <p className="mt-2 ">{skill.name}</p>
                    </div>
                ))}
            </Carousel>
        </div>

    );
};

export default SkillsSlider;
