import React from 'react'
import '../css/result.css'

class Result extends React.Component {
    constructor() {
        super();
        this.state = {loading: true}
    }
    componentDidMount() {
        if (this.props.history.location) {
            const intermediate = this.props.history.location.state;
            this.setState({loading: false, history: intermediate.history});
        }
    }

    render() {
        return ( (this.state.loading) ? (<div><h1>Loading..</h1></div>) :
            <div>
                <h1>Resultaten</h1>
                <p>Tja, het wordt helemaal niks.. Sorry...</p>
                <h2>Uw gegeven antwoorden:</h2>
                <ul>
                    {this.state.history.map((item, index) => (
                        <li key={item.question.Id}>
                            <span>{item.question.Vraag + " : " + item.answer}</span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Result;

