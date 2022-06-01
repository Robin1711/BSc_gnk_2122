import React from 'react'
import '../css/base.css'
import {withRouter} from 'react-router-dom';
import {QuestionService} from "../services/QuestionService";

class Home extends React.Component {
    _questionService = new QuestionService();
    FIRST_INDEX = 1;

    constructor() {
        super();
        this.state = {loading: true}
        this.navigateTo = this.navigateTo.bind(this)
    }

    navigateTo() {
        this._questionService.getQuestionById(this.FIRST_INDEX)
            .then((question) => {
                this.props.history.push('/question', { question: question , history: []});
            })
            .catch(err => console.log({ message:"ERROR", error: err }));
    }

    render() {
        return (
            <div className="base">
                <h1>Home</h1>
                <p>This is the homepage</p>
                <button className="startbutton" onClick={this.navigateTo}>Start Questionaire</button>
            </div>
        );
    }
}


export default withRouter(Home);
