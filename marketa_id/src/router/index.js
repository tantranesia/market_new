import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../page/Home"


function index() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route
                    key={1}
                    exact={true}
                    path={`/`}
                    render={(props) => <Home {...props} />}
                    />
                </Switch>
            </Router>
            
        </div>
    )
}

export default index
