import React from 'react'
import '../css/information.css'
import {withRouter} from "react-router-dom";

class Questionnaire extends React.Component {

    constructor() {
        super();
        this.state = {loading: true}
        this.navigateToNextQuestion = this.navigateToNextQuestion.bind(this)
        this.navigateToResults = this.navigateToResults.bind(this)
    }

    componentDidMount() {
        if (this.props.history.location) {
            console.log(this.props.history.location)
            console.log("have recieved information, setting state..")
            const intermediate = this.props.history.location.state;
            this.setState({loading: false, question: intermediate.question, history: intermediate.history}
                , () => { console.log("saved!"); console.log(this.state)}
            );
        }
    }

    navigateToResults() {
        this.props.history.push('/result', {history: this.state.history});
    }

    navigateToNextQuestion(event) {
        if (event.target.value === "Ja") {
            console.log("navigateToNextQuestion, Ja")
            const newHistory = this.state.history.concat({question: this.state.question, answer: event.target.value})
            const newQuestion = this.state.question.slice(0, -1).concat("1?");
            this.setState({loading: false, question: newQuestion, history: newHistory}
                , () => { console.log("saved!"); console.log(this.state)}
            );
        } else if (event.target.value === "Nee") {
            console.log("navigateToNextQuestion, Nee")
            const newHistory = this.state.history.concat({question: this.state.question, answer: event.target.value})
            const newQuestion = this.state.question.slice(0, -1).concat("2?");
            this.setState({loading: false, question: newQuestion, history: newHistory}
                , () => { console.log("saved!"); console.log(this.state)}
            );
        } else {
            console.error("some fucking weird value")
        }
    }

    render() {
        return ( (this.state.loading) ? (<div><h1>Loading..</h1></div>) :
            <div>
                <div>
                    <h1>Questionnaire</h1>
                    <h2>{this.state.question}</h2>
                    <button value="Ja" onClick={this.navigateToNextQuestion} className="btn">Ja</button>
                    <button value="Nee" onClick={this.navigateToNextQuestion} className="btn">Nee</button>
                </div>
                <div>
                    <button value="Nee" onClick={this.navigateToResults} className="btn">Resultaten</button>
                </div>
            </div>
        );
    }
}

export default withRouter(Questionnaire);
