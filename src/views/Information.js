import React from 'react'
import '../css/base.css'
import stroomschema from "../resources/images/stroomschema.png";

class Information extends React.Component {
    render() {
        return (
            <div>
                <div className="title-container">
                    <h1>Information</h1>
                </div>
                <div className="content-container">
                    <p>Hier een prachtige paragraaf met wat informatie over jullie project</p>
                    <img className="stroomschema-image" src={stroomschema} alt='Stroomschema'/>
                </div>
            </div>
        );
    }
}

export default Information;
