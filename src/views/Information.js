import React from 'react'
import '../css/base.css'
import stroomschema from "../resources/images/StroomschemaECG.png";

class Information extends React.Component {
    render() {
        return (
            <div>
                <div className="title-container">
                    <h1>Information</h1>
                </div>
                <div className="content-container">
                    <p>
                        Together with Tim Koldenhof, we created an algorithm for assessing ECG's. This method is not
                        scientifically proven to be accurate. Therefore, only use it as learning material.
                        <br/>
                        <br/>
                        This ECG tool is made by:<br/>
                        Guido Feringa, Lars Zandbergen, Danny Luu, Jara Meijer, Isa van Sambeek.
                    </p>
                    <img className="stroomschema-image" src={stroomschema} alt='Stroomschema'/>
                </div>
            </div>
        );
    }
}

export default Information;
