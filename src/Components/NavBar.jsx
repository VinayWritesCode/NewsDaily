import React, { Component } from 'react'

export class NavBar extends Component {
    render() {
        return (
            <div className="container">
                <nav>
                    <ul className="nav justify-content-center my-2">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Top News</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Daily News</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Crypto News</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/" tabIndex="-1" aria-disabled="true">News Based on Source</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default NavBar
