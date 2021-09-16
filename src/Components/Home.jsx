import React, { Component } from 'react';
import NavBar from './NavBar';
import News from './News';
import LoadingBar from 'react-top-loading-bar'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";


export default class Home extends Component {
    apiKey = "66b8146a31344297b33d607d8bb15c4f"
    state  = {
       progress : 0
    }
    setProgress = (progress) => {
        this.setState({progress: progress})
    }
    render() {
        return (
            <div>
                <Router>
                    <NavBar />
                    <LoadingBar
                        color='#f11946'
                        height={3}
                        progress={this.state.progress}
                    />
                    <Switch>
                        <Route exact path="/Business"><News setProgress={this.setProgress} apiKey={this.apiKey}  key="Business" pageSize={9} country="in" category="Business" /></Route>
                        <Route exact path="/Entertainment"><News setProgress={this.setProgress} apiKey={this.apiKey} key="Entertainment" pageSize={9} country="in" category="Entertainment" /></Route>
                        <Route exact path="/General"><News setProgress={this.setProgress} apiKey={this.apiKey} key="General" pageSize={9} country="in" category="General" /></Route>
                        <Route exact path="/Health"><News setProgress={this.setProgress} apiKey={this.apiKey} key="Health" pageSize={9} country="in" category="Health" /></Route>
                        <Route exact path="/Science"><News setProgress={this.setProgress} apiKey={this.apiKey} key="Science" pageSize={9} country="in" category="Science" /></Route>
                        <Route exact path="/Sports"><News setProgress={this.setProgress} apiKey={this.apiKey} key="Sports" pageSize={9} country="in" category="Sports" /></Route>
                        <Route exact path="/Technology"><News setProgress={this.setProgress} apiKey={this.apiKey} key="Technology" pageSize={9} country="in" category="Technology" /></Route>
                        <Route exact path="/">

                            <Redirect to="/General" />

                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}
