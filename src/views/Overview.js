import React from 'react'
import '../css/overview.css'
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
                this.setState({ questions: result.data }, () => this.forceUpdate());
            })
            .catch(err => console.log({ message:"ERROR", error: err }));
    }

    async fetchConclusions() {
        this._conclusionService
            .getAllConclusions()
            .then((result) => {
                this.setState({ conclusions: result.data }, () => this.forceUpdate());
            })
            .catch(err => console.log({ message:"ERROR", error: err }));
    }

    render() {
        return (
            <div>
                <h2>Overview</h2>
                <p>Hier een lijstje met alle vragen in het project en de references</p>
                <ul>
                    {this.state.questions?.map((item, index) => (
                        <li key={item.Id}>
                            <span>{item.Id + ", " + item.Vraag + ", " + item.Ja + ", " + item.Nee}</span>
                        </li>
                    ))}
                </ul>
                <p>Hier een lijstje met alle conclusies in het project en de references</p>
                <ul>
                    {this.state.conclusions?.map((item, index) => (
                        <li key={item.Id}>
                            <span>{item.Id + ", " + item.Conclusie}</span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Overview;
