import React from "react";
import Login from "./Login";
import Register from "./Register";
import NoMatchPage from "./NoMatchPage";
import Dashboard from "./Dashboard";
import { HashRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

function App() {
    return (
        <HashRouter>
            <div className="container-fluid">
                <Switch>
                    <Route path="/" exact={true} component={Login}></Route>
                    <Route path="/dashboard" component={Dashboard}></Route>
                    <Route path="/register" component={Register}></Route>
                    <Route component={NoMatchPage}></Route>
                </Switch>
            </div>
        </HashRouter>
    );
}

export default App;