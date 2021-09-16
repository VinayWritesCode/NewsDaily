import React, { useState } from 'react';
import NavBar from './NavBar';
import News from './News';
import LoadingBar from 'react-top-loading-bar'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

export default function Home() {
    const apiKey = "66b8146a31344297b33d607d8bb15c4f"

    const [progress, setProgress] = useState(0)
    return (
        <div>
            <Router>
                <NavBar />
                <LoadingBar
                    color='#f11946'
                    height={3}
                    progress={progress}
                />
                <Switch>
                    <Route exact path="/Business"><News setProgress={setProgress} apiKey={apiKey} key="Business" pageSize={9} country="in" category="Business" /></Route>
                    <Route exact path="/Entertainment"><News setProgress={setProgress} apiKey={apiKey} key="Entertainment" pageSize={9} country="in" category="Entertainment" /></Route>
                    <Route exact path="/General"><News setProgress={setProgress} apiKey={apiKey} key="General" pageSize={9} country="in" category="General" /></Route>
                    <Route exact path="/Health"><News setProgress={setProgress} apiKey={apiKey} key="Health" pageSize={9} country="in" category="Health" /></Route>
                    <Route exact path="/Science"><News setProgress={setProgress} apiKey={apiKey} key="Science" pageSize={9} country="in" category="Science" /></Route>
                    <Route exact path="/Sports"><News setProgress={setProgress} apiKey={apiKey} key="Sports" pageSize={9} country="in" category="Sports" /></Route>
                    <Route exact path="/Technology"><News setProgress={setProgress} apiKey={apiKey} key="Technology" pageSize={9} country="in" category="Technology" /></Route>
                    <Route exact path="/">

                        <Redirect to="/General" />

                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
