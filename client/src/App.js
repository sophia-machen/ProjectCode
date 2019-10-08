import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import NavBar from './Components/HeaderComponent/NavBar';
import Footer from './Components/FooterComponent/Footer';
import Login from "./Components/HeaderComponent/Login";

//App is very important. This is where I have declared all of my routes, which are imported above
class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route name="header" exact path="/" component={NavBar} />
                    {/* Login takes you to a different screen, so the path is different from the rest */}
                    <Route path="/login" exact component={Login} />
                    <Route name="home" exact path="/" component={HomePage} />
                    <Route name="footer" exact path="/" component={Footer} />
                </div>
            </Router>
        )
    }
}

export default App;
