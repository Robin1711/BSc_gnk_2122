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
        return ((this.state.loading) ? (<div><h1>Loading..</h1></div>) :
                <div className="base">
                    <div className="title-container">
                        <h1>Conclusion</h1>
                    </div>
                    <div className="content-container">
                        {this.state.conclusion.Image ? <img className="conclusion-image"
                                                            src={require(`../resources/images/${this.state.conclusion.Image}`)}
                                                            alt='conclusieplaatje'/> : <span/>}
                        {this.state.conclusion.Conclusie ? <h3>{this.state.conclusion.Conclusie}</h3> : <span/>}
                        {this.state.conclusion.Informatie ? <p>{this.state.conclusion.Informatie}</p> : <span/>}
                        <br/>
                        <br/>
                        <h4>Uw gegeven antwoorden:</h4>
                        <ol>
                            {this.state.history.map((item, index) => (
                                <li key={item.question.Id}>
                                    <p>{item.question.Vraag + "   :   " + item.answer}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
        );
    }
}

export default Conclusion;

