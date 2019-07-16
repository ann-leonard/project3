import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp"; 
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Details from "./pages/Details";

ReactDOM.render(
        <BrowserRouter>
            <App>
                <Switch>
                    <Route path="/user/api/series/:id" component={Details}/>
                    <Route path="/user/dashboard" component={Dashboard} />
                    <Route path="/sign-in" component={SignIn} />
                    <Route path="/sign-up" component={SignUp} />
                    <Route path="/" component={Home} />
                </Switch> 
            </App>
        </BrowserRouter>
    , document.getElementById("root"));
registerServiceWorker();
 