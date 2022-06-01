import React from 'react'
import Navbar from './Navbar'
import '../css/header.css'

class Header extends React.Component {

    render() {
        return (
          <div className="header">
              <Navbar />
          </div>
        );
    }
}

export default Header;
