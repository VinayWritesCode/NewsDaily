import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
    let dropDownBoxStyle = {
        background: "linear-gradient(grey, purple)",
        fontWeight: "bolder"
    }
    return (
        <div className="container">
            <nav>
                <ul className="nav justify-content-center my-2">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Top News</ Link>
                    </li>

                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="/" role="button" aria-expanded="false">Categories</ Link>
                        <ul className="dropdown-menu" style={dropDownBoxStyle}>
                            <li className="nav-item"> <Link className="dropdown-item" to="/Business">Business</ Link> </li>
                            <li className="nav-item"> <Link className="dropdown-item" to="/Entertainment">Entertainment</ Link></li>
                            <li className="nav-item"> <Link className="dropdown-item" to="/General">General</ Link></li>
                            <li className="nav-item"> <Link className="dropdown-item" to="/Health">Health</ Link></li>
                            <li className="nav-item"> <Link className="dropdown-item" to="/Science">Science</ Link></li>
                            <li className="nav-item"> <Link className="dropdown-item" to="/Sports">Sports</ Link></li>
                            <li className="nav-item"> <Link className="dropdown-item" to="/Technology">Technology</ Link></li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/">Daily News</ Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Crypto News</ Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link " to="/" tabIndex="-1" aria-disabled="true">News Based on Source</ Link>
                    </li>


                </ul>
            </nav>
        </div>
    )
}

export default NavBar
