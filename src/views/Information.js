import React from 'react'
import '../css/base.css'
import stroomschema from "../resources/images/stroomschema.png";

class Information extends React.Component {
    render() {
        return (
            <div className="base">
                <h2>Informatie</h2>
                <p>Hier een prachtige paragraaf met wat informatie over jullie project</p>
                <img className="stroomschema-image" src={stroomschema} alt='Stroomschema'/>
            </div>
        );
    }
}

export default Information;
