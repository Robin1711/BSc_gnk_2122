import React from 'react'
import '../css/header.css'
import umcg from "../resources/images/logo-umcg.png";

class Navbar extends React.Component {
    render() {
        return (
            <div className="list-container">
                <ul className="menu">
                    <li><img className="logo-image" src={umcg} alt='logo'/></li>
                    <li><a href={"/"}>Home</a></li>
                    <li><a href={"information"}>Information</a></li>
                    <li><a href={"overview"}>Overview</a></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;
