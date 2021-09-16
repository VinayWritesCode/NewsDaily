import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
    let dropDownBoxStyle = {
        background: "#000",
        fontWeight: "bolder",
        border: "1px solid #fff"
    }
    
    let navStyle = {
        color: "#fff"
    }

    let navBarStyle = {
        width: "100vw",
        height: "auto",
        background: "#000000",
        borderRadius: "5px"
    }

    return (
        <div className="container text-decoration-none fixed-top " style={navBarStyle}>
            <nav>
                <ul className="nav justify-content-center my-2">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" style={navStyle} to="/">Top News</ Link>
                    </li>

                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" style={navStyle} to="/" role="button" aria-expanded="false">Categories</ Link>
                        <ul className="dropdown-menu" style={dropDownBoxStyle}>
                            <li className="nav-item"> <Link className="dropdown-item" style={{ color: "#ff8080"}} to="/Business">Business</ Link> </li>
                            <li className="nav-item"> <Link className="dropdown-item" style={{ color: "#ff8080"}} to="/Entertainment">Entertainment</ Link></li>
                            <li className="nav-item"> <Link className="dropdown-item" style={{ color: "#ff8080"}} to="/General">General</ Link></li>
                            <li className="nav-item"> <Link className="dropdown-item" style={{ color: "#ff8080"}} to="/Health">Health</ Link></li>
                            <li className="nav-item"> <Link className="dropdown-item" style={{ color: "#ff8080"}} to="/Science">Science</ Link></li>
                            <li className="nav-item"> <Link className="dropdown-item" style={{ color: "#ff8080"}} to="/Sports">Sports</ Link></li>
                            <li className="nav-item"> <Link className="dropdown-item" style={{ color: "#ff8080"}} to="/Technology">Technology</ Link></li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" style={navStyle} to="/">Daily News</ Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" style={navStyle} to="/">Crypto News</ Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link " style={navStyle} to="/" tabIndex="-1" aria-disabled="true">News Based on Source</ Link>
                    </li>


                </ul>
            </nav>
        </div>
    )
}

export default NavBar
