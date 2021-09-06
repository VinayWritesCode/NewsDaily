import React, { Component } from 'react';
import NavBar from './NavBar';
import News from './News';


export default class Home extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <News />
            </div>
        )
    }
}
