import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './views/Home'
import Information from './views/Information'
import Result from "./views/Result";
import Questionnaire from "./views/Questionnaire";

class Navigation extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/information" exact component={Information} />
                    <Route path="/question" exact component={Questionnaire} />
                    <Route path="/result" exact component={Result} />
                </Switch>
            </BrowserRouter>
        );
    }
}



export default Navigation;
