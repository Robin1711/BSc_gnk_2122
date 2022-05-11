import React from 'react'
import '../css/navbar.css'
import umcg from "../resources/images/logo-umcg.png";

class Navbar extends React.Component {
    render() {
        return (
            <nav className={"navbar navbar-default"}>
                <div className={"navbar-header"}>
                    <img className="logo-image" src={umcg} alt='logo'/>
                    <ul className={"nav navbar-nav"}>
                        <li><a href={"home"}>Home</a></li>
                        <li><a href={"information"}>Information</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
