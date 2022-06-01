import React from 'react'
import '../css/base.css'

class Conclusion extends React.Component {
    constructor() {
        super();
        this.state = {loading: true}
    }
    componentDidMount() {
        if (this.props.history.location) {
            const data = this.props.history.location.state;
            this.setState({loading: false, history: data.history, conclusion: data.conclusion});
        }
    }

    render() {
        return ( (this.state.loading) ? (<div><h1>Loading..</h1></div>) :
            <div className="base">
                <h1>Conclusie</h1>
                {this.state.conclusion.Image ? <img className="conclusion-image" src={require(`../resources/images/${this.state.conclusion.Image}`)} alt='conclusieplaatje'/> : <span/>}
                {this.state.conclusion.Conclusie ? <p>{this.state.conclusion.Conclusie}</p> : <span/>}
                {this.state.conclusion.Informatie ? <p>{this.state.conclusion.Informatie}</p> : <span/>}
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

export default Conclusion;

