import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './views/Home'
import Information from './views/Information'
import Conclusion from "./views/Conclusion";
import Questionnaire from "./views/Questionnaire";
import Overview from "./views/Overview";

class Navigation extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/information" exact component={Information} />
                    <Route path="/overview" exact component={Overview} />
                    <Route path="/question" exact component={Questionnaire} />
                    <Route path="/conclusion" exact component={Conclusion} />
                </Switch>
            </BrowserRouter>
        );
    }
}



export default Navigation;
