import React from 'react'
import '../css/questionnaire.css'
import {withRouter} from "react-router-dom";
import {QuestionService} from "../services/QuestionService";
import {ConclusionService} from "../services/ConclusionService";

class Questionnaire extends React.Component {
    _questionService = new QuestionService();
    _conclusionService = new ConclusionService();

    constructor() {
        super();
        this.state = {loading: true}
        this.navigateToNext = this.navigateToNext.bind(this)
        this.navigateToResults = this.navigateToResults.bind(this)
    }

    componentDidMount() {
        if (this.props.history.location) {
            const intermediate = this.props.history.location.state;
            this.setState({loading: false, question: intermediate.question, history: intermediate.history});
        }
    }

    navigateToResults() {
        this.props.history.push('/result', {history: this.state.history});
    }

    navigateToNext(event) {
        const next = event.target.value === "Ja" ? this.state.question.Ja : this.state.question.Nee;
        console.log(next)
        const isQuestion = next.slice(0, 1) === "V";
        const next_Id = Number(next.slice(1));
        console.log({parsed: next, question: isQuestion, Id: next_Id})
        if (isQuestion) {
            this._questionService.getQuestionById(next_Id)
                .then((next_question) => {
                    const newHistory = this.state.history.concat({id: this.state.question.Id, question: this.state.question, answer: event.target.value})
                    this.setState({loading: false, question: next_question, history: newHistory});
                })
                .catch(err => console.log({ message:"ERROR", error: err }));
        } else {
            const newHistory = this.state.history.concat({id: this.state.question.Id, question: this.state.question, answer: event.target.value})
            this.setState({history: newHistory}, () => this.navigateToResults())
        }
    }

    render() {
        return ( (this.state.loading) ? (<div><h1>Loading..</h1></div>) :
            <div>
                <div>
                    <h1>Questionnaire</h1>
                    <p>{this.state.question.Informatie}</p>
                    <img className="information-image" src={require(`../resources/images/${this.state.question.Image}`)} alt='informatieplaatje'/>
                    <h2>{this.state.question.Vraag}</h2>
                    <button value="Ja" onClick={this.navigateToNext} className="btn">Ja</button>
                    <button value="Nee" onClick={this.navigateToNext} className="btn">Nee</button>
                </div>
            </div>
        );
    }
}

export default withRouter(Questionnaire);
