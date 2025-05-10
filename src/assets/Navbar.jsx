import React from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const Navbar = () => {
    const [border, setBorder] = useState("home");
    const [menu, setMenu] = useState(true);

    return (
        <>
            <nav className="navbar navbar-expand-lg pt-4 z-3">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <a className="px-4 navbar-brand text-light text-xl" href="#"> PORTFOLIO</a>

                    <div className="d-flex justify-content-between align-items-center">

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0 d-flex justify-content-between align-items-center ">
                                {["home", "about", "skills", "service", "projects", "contact"].map((item) => (
                                    <li className="nav-item" key={item}>
                                        <a
                                            href={`#${item}`}
                                            className={`nav-link text-light px-4 ${border === item ? "active" : ""}`}
                                            onClick={() => setBorder(item)}
                                        >
                                            {item.charAt(0).toUpperCase() + item.slice(1)}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <button
                                onClick={() => { setMenu(!menu) }}
                                className="navbar-toggler me-2"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span style={{ color: "white" }} >{menu ? <MenuIcon color='white' /> : <CloseIcon />}</span>
                            </button>
                        </div>

                    </div>

                    <button className="non button-purchase">Contact Now</button>
                </div>
            </nav>
        </>
    );

}

export default Navbar