//literally just displays a copyright at the bottom of the page

//this makes it so you can use the format "class _NAME_ extends Component" instead of "class _NAME_ extends React Component"
import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div>
                    <footer>
                        &copy; 2019 plannerCORTEX
                    </footer>
                </div>
            </footer>
        )
    }
}
export default Footer;