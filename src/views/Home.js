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
                <div className="title-container">
                    <h1>Interactive ECG tool</h1>
                </div>
                <div className="content-container">
                    <p className="regular-paragraph">Welcome to our interactive ECG tool. This is the homepage. Click on start to make use of our ECG tool.</p>
                    <button className="startbutton" onClick={this.navigateTo}>Start ECG tool</button>
                </div>
            </div>
        );
    }
}


export default withRouter(Home);
