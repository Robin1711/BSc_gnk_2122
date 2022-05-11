import React from 'react'
import '../css/home.css'
import {withRouter} from 'react-router-dom';

class Home extends React.Component {

    navigateTo = () => this.props.history.push('/question', {question: "Vraag1?", history: []});

    render() {
        return (
            <div>
                <h1>Home</h1>
                <h3>This is the homepage</h3>
                <button onClick={this.navigateTo} className="btn">Start Questionaire</button>
            </div>
        );
    }
}


export default withRouter(Home);
