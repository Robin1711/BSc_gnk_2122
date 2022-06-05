import React from 'react'
import '../css/base.css'
import {QuestionService} from "../services/QuestionService";
import {ConclusionService} from "../services/ConclusionService";

class Overview extends React.Component {
    _questionService = new QuestionService();
    _conclusionService = new ConclusionService();

    constructor() {
        super();
        this.state = {
            questions: [],
            conclusions: []
        }
    }

    async componentDidMount() {
        await this.fetchQuestions();
        await this.fetchConclusions();
    }

    async fetchQuestions() {
        this._questionService
            .getAllQuestions()
            .then((result) => {
                this.setState({questions: result.data}, () => this.forceUpdate());
            })
            .catch(err => console.log({message: "ERROR", error: err}));
    }

    async fetchConclusions() {
        this._conclusionService
            .getAllConclusions()
            .then((result) => {
                this.setState({conclusions: result.data}, () => this.forceUpdate());
            })
            .catch(err => console.log({message: "ERROR", error: err}));
    }

    render() {
        return (
            <div>
                <div className="title-container">
                    <h1>Overzicht</h1>
                </div>
                <div className="content-container">
                    <p className="regular-paragraph">Hier een lijstje met alle vragen in het project en de references</p>
                    <ul className="overview-list">
                        {this.state.questions?.map((item, index) => (
                            <li key={item.Id}>
                            <span>{`${item.Id}, ${item.Vraag}, ${item.Ja}, ${item.Nee}${item.Informatie ? ", " + item.Informatie : ""}${item.Image ? ", " + item.Image : ""}`}</span></li>
                        ))}
                    </ul>
                    <p className="regular-paragraph">Hier een lijstje met alle conclusies in het project en de references</p>
                    <ul className="overview-list">
                        {this.state.conclusions?.map((item, index) => (
                            <li key={item.Id}>
                            <span>{`
                            ${item.Id}, ${item.Conclusie}${item.Informatie ? ", " + item.Informatie : ""}${item.Image ? ", " + item.Image : ""}
                            `}</span></li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Overview;
