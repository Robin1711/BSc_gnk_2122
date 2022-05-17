import React from 'react'
import '../css/information.css'
import stroomschema from "../resources/images/stroomschema.png";

class Information extends React.Component {
    render() {
        return (
            <div>
                <h2>Information</h2>
                <p>Hier een prachtige paragraaf met wat informatie over jullie project</p>
                <img className="stroomschema-image" src={stroomschema} alt='Stroomschema'/>
            </div>
        );
    }
}

export default Information;
