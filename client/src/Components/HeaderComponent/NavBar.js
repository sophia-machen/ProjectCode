import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';


//this is how to display the dropdown menu when you hover over the right icon
class NavBar extends Component {
    render() {
        return (
	  
            <header>
                <ul id="headerButtons">
                    <li><a href="#home"><div className="icon"></div></a></li>
                    <li className="dropdown">
                        <a href="javascript:void(0)" className="dropbtn"><div className="icon"></div></a>
                        <div className="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            {/*This links to localhost:3000/Login, and displays as "Login"*/}
                            {/*The route for this can be found in App.js*/}
                            <Link to="/Login">Login</Link>
                        </div>
                    </li>
                </ul>
            </header>
	  
        )
    }
}


export default NavBar;
