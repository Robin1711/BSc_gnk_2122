import React from 'react'
import '../css/overview.css'
import {QuestionService} from "../services/QuestionService";
import Papa from "papaparse";
import csvFile from "../resources/vragen.csv"

class Overview extends React.Component {
    _questionService;

    constructor() {
        super();
        this.state = {loading: true}
        this._questionService = new QuestionService();
    }

    componentDidMount() {
        Papa.parse(csvFile, {
            delimiter: ',',
            download: true,
            header: true,
            dynamicTyping: true,
            complete: (res) => {
                console.log(res);
                this.setState({loading: false, data: res.data})
            }
        });
    }

    render() {
        return ( (this.state.loading) ? (<div><h1>Loading..</h1></div>) :
            <div>
                <h2>Overview</h2>
                <p>Hier een lijstje met alle vragen in het project en de references</p>
                <ul>
                    {this.state.data.map((item, index) => (
                        <li key={item.Id}>
                            <span>{item.Id + ", " + item.Vraag + ", " + item.Ja + ", " + item.Nee}</span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Overview;
