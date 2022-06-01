import React from 'react'
import '../css/base.css'
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
        this.navigateToConclusion = this.navigateToConclusion.bind(this)
    }

    componentDidMount() {
        if (this.props.history.location) {
            const intermediate = this.props.history.location.state;
            this.setState({loading: false, question: intermediate.question, history: intermediate.history});
        }
    }

    navigateToQuestion(question_Id, answer) {
        this._questionService.getQuestionById(question_Id)
            .then((next_question) => {
                this.setState({loading: false, question: next_question, history: this.state.history});
            })
            .catch(err => console.log({ message:"ERROR", error: err }));
    }

    navigateToConclusion(conclusion_Id) {
        this._conclusionService.getConclusionById(conclusion_Id)
            .then((conclusion) => {
                console.log(conclusion)
                this.props.history.push('/conclusion', {history: this.state.history, conclusion: conclusion});
            })
            .catch(err => console.log({ message:"ERROR", error: err }));
    }

    navigateToNext(event) {
        // Get next question/conclusion Id
        const next = event.target.value === "Ja" ? this.state.question.Ja : this.state.question.Nee;
        const isQuestion = next.slice(0, 1) === "V";
        const next_Id = Number(next.slice(1));
        // Append answer to history
        this.setState({history: this.state.history.concat({id: this.state.question.Id, question: this.state.question, answer: event.target.value})},
            () => {
                if (isQuestion) {
                    this.navigateToQuestion(next_Id)
                } else {
                    // isConclusion
                    this.navigateToConclusion(next_Id)
                }
            })
    }

    render() {
        return ( (this.state.loading) ? (<div><h1>Loading..</h1></div>) :
            <div className="base">
                <h1>Questionnaire</h1>
                <p>{this.state.question.Informatie ? this.state.question.Informatie : ""}</p>
                {this.state.question.Image ? <img className="information-image" src={require(`../resources/images/${this.state.question.Image}`)} alt='informatieplaatje'/> : <span/>}
                <h3>{this.state.question.Vraag ? this.state.question.Vraag : ""}</h3>
                <button value="Ja" onClick={this.navigateToNext} className="btn">Ja</button>
                <button value="Nee" onClick={this.navigateToNext} className="btn">Nee</button>
            </div>
        );
    }
}

export default withRouter(Questionnaire);
