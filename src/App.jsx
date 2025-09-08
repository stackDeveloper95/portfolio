import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./App.css"
import { Link } from 'react-router-dom'
import Navbar from './assets/Navbar'
import SpotlightCard from './assets/SpotlightCard'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import SendIcon from '@mui/icons-material/Send';
import MetaBalls from './assets/MetalBalls'
import ArticleIcon from '@mui/icons-material/Article';
import ProjectsPage from './assets/projects'
import CircularText from './assets/circularText'
import resume from "./assets/sanjai.pdf"
import GitHubIcon from '@mui/icons-material/GitHub';
import SkillsSlider from './assets/SkillsSlider'





function App() {

  return (
    <>

      <div style={{

        width: "100%",
        background: "rgb(29, 27, 52)",
        overflowX: "hidden",
        zIndex: "4"
      }} class="position-fixed top-0 text-white">
        <Navbar />
      </div>
      <div
        id="home"
        className="col-sm-6 col-lg-6 col-md-6 d-flex align-items-center justify-content-between gap-4 p-5"
        style={{
          height: "100vh",
          width: "100vw",
          background: "rgb(29, 27, 52)",
        }}
      >
        <div
          className="d-flex m-4 align-items-start gap-4 flex-wrap justify-content-cente"
          style={{ minWidth: "330px" }}

        >
          <SpotlightCard
            className="custom-spotlight-card text-white p-4 p-md-5 rounded-4 shadow-lg position-relative z-3"
            spotlightColor="rgba(0, 229, 255, 0.15)"
          >
            <div className="profile-card text-center">
              <h1 className="fw-bold display-4 mb-2">
                Sanjai Kumar <span role="img" aria-label="wave"></span>
              </h1>
              <h2 className="text-info mb-3 fs-4">
                <span
                  className="border-bottom border-white d-inline-block"
                  style={{ width: '50px', height: '3px', marginLeft: '10px' }}
                ></span>
                Software Developer
              </h2>
              <p className="text-secondary fs-6 px-md-4 mb-4">
                I'm a passionate software developer from India, focused on creating efficient, scalable, and innovative solutions that deliver seamless digital experiences across web and mobile platforms.
              </p>



              <div className="d-flex justify-content-center gap-3 flex-wrap mb-4">
                <a href="https://wa.me/919597134654" target="_blank" style={{
                  background: "#7A5AF8",
                  color: "white",
                  borderRadius: "12px"
                }} className="btn  px-4 py-2 fw-semibold glow-button">
                  Say Hello < SendIcon />
                </a>
                <button style={{ borderRadius: "12px" }} className="btn btn-outline-light  px-4 py-2 fw-semibold">
                  My Works <ArrowOutwardIcon />
                </button>
              </div>

              <div className="mt-3">
                <span className="text-light">Follow me:</span>
                <div className="d-flex justify-content-center gap-3 mt-2">
                  <div className="social-icons d-flex flex-row justify-content-between gap-2">
                    <a
                      href='https://instagram.com/sanjai_kumar.95?igshid=MzMyNGUyNmU2YQ=='
                      className="social-icon bg-light text-dark " target="# "
                    >
                      <InstagramIcon />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/sanjai-kumar-r-102365294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="# "
                      className="social-icon bg-light text-dark"
                    >
                      <FacebookIcon />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/sanjai-kumar-r-102365294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      className="social-icon bg-light text-dark" target="# "
                    >
                      <LinkedInIcon />
                    </a>

                    <a
                      href="https://github.com/stackDeveloper95"
                      className="social-icon bg-light text-dark" target="# "
                    >
                      <GitHubIcon />
                    </a>
                  </div>


                  <style>
                    {`
      .social-icon {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f8f9fa;
        color: #212529;
        transition: background-color 0.3s ease, color 0.3s ease;
      }

      .social-icon:nth-child(1):hover {
        background-color: #E1306C;
        color: white;
      }

      .social-icon:nth-child(2):hover {
        background-color: #1877F2;
        color: white;
      }

      .social-icon:nth-child(3):hover {
        background-color: #0A66C2;
        color: white;
      }

      .social-icon:hover svg {
        fill: white;
      }
    `}
                  </style>
                </div>

              </div>
            </div>
          </SpotlightCard>


        </div>
        <div id="second" tyle={{ height: "400px", width: "600px" }} className="text-white align-self-center p-4 br-light">
          <div>
            {/* <h3 className="fw-semibold">Let’s build something great together.</h3>
            <p className="text-secondary">
              Whether it's a sleek website, a dynamic web app, or a creative collaboration —
              I'm always up for new challenges and opportunities to grow.
            </p> */}

            <div style={{ height: "550px", width: "650px" }} >





              <MetaBalls
                color="#7A5AF8"
                cursorBallColor="#ffffff"
                cursorBallSize={2}
                ballCount={15}
                animationSize={30}
                enableMouseInteraction={true}
                enableTransparency={true}
                hoverSmoothness={0.05}
                clumpFactor={1}
                speed={0.3}
              />

              <div style={{ position: "relative", top: "-100px", left: "450px", height: "210px", width: "210px", borderRadius: "50%", backgroundColor: "black", boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", opacity: "0.5" }}>
                <CircularText
                  text="welcome*to*My Page*"
                  onHover="speedUp"
                  spinDuration={20}
                  className="custom-class"
                />

              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="about" className="container-fluid py-5 p-5" style={{ backgroundColor: '#6a4bc4', width: "100vw", height: "100%", overflow: "hidden" }}>
        <div className="row align-items-center justify-content-center">
          {/* Left side - Experience */}
          <div className="col-md-5 text-center text-md-start mb-4 mb-md-0">
            <div style={{ color: '#f9b233', fontSize: '10rem', fontWeight: 'bold', lineHeight: '1', position: 'relative' }}>
              3
              <div style={{ fontSize: '1.2rem', color: 'black', marginTop: '1rem' }}>
                Years of Learning
              </div>
              <div style={{
                fontWeight: 'bold',
                fontSize: '1.5rem',
                marginTop: '1rem',
                letterSpacing: '2px'
              }}>
                SANJAI KUMAR
              </div>
            </div>
          </div>

          {/* Right side - About Me Content */}
          <div className="col-md-6 text-white">
            <h2 className="fw-bold display-5 mb-3">
              About Me <span className="border-bottom border-white d-inline-block" style={{ width: '50px', height: '3px', marginLeft: '10px', fontSize: "10rem" }}></span>
            </h2>
            <p className="fs-5 mb-4 text-light">
              I'm Sanjai, a passionate and curious web developer with 3 years of hands-on learning and building projects. I love turning ideas into interactive experiences and constantly push myself to improve my skills in frontend and backend technologies.
            </p>

            <div className="d-flex align-items-center gap-4 flex-wrap">

              <a href="https://drive.google.com/file/d/1OfVsxcD_nOYyfIpcgJ3VND65FNi0ZBh3/view?usp=drive_link" target="blank" download className="btn btn-light fw-bold px-4 py-2  d-flex align-items-center gap-2" style={{ borderRadius: "12px" }}>
                Download CV
                <i className="bi bi-download"><ArticleIcon /></i>
              </a>
              {/* <img src="/signature.png" alt="Signature" style={{ height: '50px' }} /> */}
            </div>
          </div>
        </div>
      </div>

      <div id="skills" className="container-fluid py-5 px-4" style={{ backgroundColor: '#1e1c2a', color: 'white', width: "100vw" }}>
        <div className="row">
          {/* Left Column */}
          <div className="col-md-5 mb-4">
            <h2 className="fw-bold display-5 mb-3">
              My expert <br /> areas
              <span className="d-block mt-2" style={{ borderBottom: '2px solid white', width: '60px' }}></span>
            </h2>
            <p className="text-light fs-5">
              I'm an expert in MERN stack web development, skilled in building full-stack applications using MongoDB, Express.js, React, and Node.js. I also have hands-on experience with React Native for cross-platform mobile development. My knowledge extends into Machine Learning and Generative AI, enabling me to craft intelligent, adaptive digital solutions. Whether you're looking for a powerful web app or an innovative AI-driven product, I bring both creativity and technical depth to every project.
            </p>
            {/* <p className="text-light fs-5">
              You can customize a template or make your own from scratch, with an immersive library at your disposal.
            </p> */}
            <a href="https://drive.google.com/file/d/1OfVsxcD_nOYyfIpcgJ3VND65FNi0ZBh3/view?usp=drive_link" target="blank" download className="btn btn-primary fw-bold px-4 py-2 mt-3" style={{ backgroundColor: '#7B4EF7', border: 'none', borderRadius: '12px' }}>

              Download Resume

              <i className="bi bi-download ms-2"></i>
            </a>
          </div>

          {/* Right Column */}
          <div className="col-md-7">
            <div className="d-flex justify-content-start gap-4 mb-4 flex-wrap">
              {/* <button className="btn btn-outline-light px-4 py-2 rounded-pill border-white text-white fw-semibold">Skills <ArrowOutwardIcon /></button> */}
              {/* <button className="btn btn-outline-light px-4 py-2 rounded-pill border-0 text-white fw-semibold">Experience ↗</button>
              <button className="btn btn-outline-light px-4 py-2 rounded-pill border-0 text-white fw-semibold">Education ↗</button> */}
            </div>

            <div className=" row row-cols-3 row-cols-md-3 g-4">
              <SkillsSlider />
              {/* {[
                { icon: '', label: 'Java', value: '90%' },
                { icon: '', label: 'Python', value: '85%' },
                { icon: '', label: 'Java Script', value: '95%' },
                { icon: '', label: 'Web Development', value: '95%' },
                { icon: '', label: 'Machine Learning', value: '80%' },
                { icon: '', label: 'Gen AI', value: '75%' },
              ].map((skill, i) => (
                <div className="col" key={i}>
                  <div className="d-flex align-items-center gap-3">
                    <div style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: 'white',
                      color: '#1e1c2a',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                    }}>
                      {skill.icon}
                    </div>
                    <span className="fw-semibold">{skill.label} <strong>({skill.value})</strong></span>
                  </div>
                </div>
              ))} */}
            </div>
          </div>
        </div>
      </div>

      <section id="service" class="bg-dark text-light py-5 p-5" style={{ width: "100vw" }}>
        <div class="container">
          <h2 class="fw-bold mb-4">Services <br /> I Provide <hr class="border-light w-25" /></h2>

          <div class="mb-3 p-3 d-flex justify-content-between align-items-center border-bottom border-light service-box">
            <div>
              <h5 class="mb-1">01 &nbsp; Web Development</h5>
              <p class="mb-0">I build responsive, modern, and scalable websites tailored to business and user needs.</p>
            </div>
            <i class="bi bi-box-arrow-up-right fs-4 text-light"></i>
          </div>

          <div class="mb-3 p-3 d-flex justify-content-between align-items-center border-bottom border-light service-box">
            <div>
              <h5 class="mb-1">02 &nbsp; App Development</h5>
              <p class="mb-0">Developing cross-platform mobile applications using React Native and backend APIs.</p>
            </div>
            <i class="bi bi-box-arrow-up-right fs-4 text-light"></i>
          </div>

          <div class="mb-3 p-3 d-flex justify-content-between align-items-center border-bottom border-light service-box">
            <div>
              <h5 class="mb-1">03 &nbsp; Consulting</h5>
              <p class="mb-0">Providing expert tech advice, project guidance, and development strategies.</p>
            </div>
            <i class="bi bi-box-arrow-up-right fs-4 text-light"></i>
          </div>

          <div class="mb-3 p-3 d-flex justify-content-between align-items-center border-bottom border-light service-box">
            <div>
              <h5 class="mb-1">04 &nbsp; Project Building</h5>
              <p class="mb-0">Building full-stack projects from scratch — from idea to deployment.</p>
            </div>
            <i class="bi bi-box-arrow-up-right fs-4 text-light"></i>
          </div>


        </div>
      </section>

      <div id="projects" className="py-5 px-4" style={{ width: "100vw", backgroundColor: "#f9b233", height: "100%", paddingTop: "50px" }} >
        <ProjectsPage />

      </div>

      <div id="contact" style={{ backgroundColor: '#0e0e17', color: 'white', padding: '60px 0', width: "100vw" }}>
        {/* Header Row */}
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between text-center text-md-start" style={{ backgroundColor: '#0e0e17', color: 'white', padding: '60px 0', width: "100vw" }}>
          {/* Left Circular Badge */}
          <div className="mb-4 mb-md-0">
            <div
              style={{
                width: '120px',
                height: '120px',
                backgroundColor: '#f9b233',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '14px',
                color: '#000',
                textAlign: 'center',
              }}
            >
              <CircularText
                text="welcome*to*My Page*"
                onHover="speedUp"
                spinDuration={20}
                className="custom-class"
              />
            </div>
          </div>

          {/* Center Text */}
          <div className="flex-grow-1 mx-md-5 px-3">
            <h2 style={{ fontWeight: 'bold' }}>Let's work together</h2>
            <p className="text-light">
              I'm Sanjai, a passionate Web Developer. Let's bring your ideas to life.
              Reach out to discuss your next project!
            </p>
          </div>

          {/* Right CTA Button */}
          <div>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=r.m.sanjai95@gmail.com" target="_blank">

              <button style={{
                background: "#7A5AF8",
                color: "white",
                borderRadius: "12px"
              }} className="btn  px-4 py-2 fw-semibold glow-button">
                Say Hello < SendIcon />
              </button>
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="container mt-5 text-center text-md-start">
          <div className="row justify-content-between">
            <div className="col-md-4 mb-3">
              <p className="text-light mb-1">Call:</p>
              <h5>+91 9597134654</h5>
            </div>
            <div className="col-md-4 mb-3">
              <p className="text-light mb-1">Email:</p>
              <h5>r.m.sanjai95@gmail.com</h5>
            </div>
            <div className="mt-3 d-flex flex-row gap-2" >
              <span className="text-light pt-3">Follow me:</span>
              <div className="d-flex justify-content-center gap-3 mt-2">
                <div className="social-icons d-flex flex-row justify-content-between gap-2">
                  <a
                    href='https://instagram.com/sanjai_kumar.95?igshid=MzMyNGUyNmU2YQ=='
                    className="social-icon bg-light text-dark " target="# "
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sanjai-kumar-r-102365294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    className="social-icon bg-light text-dark" target="# "
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sanjai-kumar-r-102365294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    className="social-icon bg-light text-dark" target="# "
                  >
                    <LinkedInIcon />
                  </a>
                </div>


                <style>
                  {`
      .social-icon {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f8f9fa;
        color: #212529;
        transition: background-color 0.3s ease, color 0.3s ease;
      }

      .social-icon:nth-child(1):hover {
        background-color: #E1306C;
        color: white;
      }

      .social-icon:nth-child(2):hover {
        background-color: #1877F2;
        color: white;
      }

      .social-icon:nth-child(3):hover {
        background-color: #0A66C2;
        color: white;
      }

      .social-icon:hover svg {
        fill: white;
      }
    `}
                </style>
              </div>

            </div>
          </div>
        </div>

        {/* Footer */}

      </div>
      <div className="text-center  py-3" style={{ backgroundColor: '#f9b233', color: '#000', width: "100vw", paddingBottom: "50px" }}>
        <strong><i className="bi bi-person-circle me-2"></i>Sanjai</strong>
        <p className="mb-0 mt-1">&copy; 2025 Sanjai | All Rights Reserved</p>
      </div>




    </>
  );
}




export default App
