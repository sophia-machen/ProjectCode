import React, { Component } from 'react';
import image from './pictures/icons8-ios-photos-100.png'
import wall from './pictures/wallpaper.jpg'

//THIS IS NOT REALLY REACT
//I basically stole all of my previous css/html code from the starter page I showed you guys
//I didn't know how to do the layout so I just took my old code and put it in a react component
//took a basic icon image from the internet
class HomePage extends Component {
    render() {
        return (
            <div>
            <div className="container">
                <img src={wall} alt ="background" className="backImage"></img>
                <h1 className="title2">plannerCORTEX</h1>
                <h3 className="phrase">Organize your life today</h3>
            </div>
            <div>
                <h3 className="blocktext1">..</h3>
                <a href="#home"><img src={image} className="image" alt="picture"></img></a>
                <h2 className="bigWords">Our mission statement</h2>
                <h3 className="blocktext2">plannerCORTEX is a task scheduler designed to help people that struggle with ADD</h3>
                <h3 className="blocktext2">paragraph 2 </h3>
            </div>
	    <div>
		<h3 className="blocktext1">EXAMPLE IMAGE OF USER HOMEPAGE </h3>
	    </div>
            <div className="section3">
                <h2 className="planning">Design Features</h2>
            <div id="box-container">
            <div id="box-1">
                <img src={image} className="pIcon" alt="key1"></img>
                <h2 className="pPhrase">Stay up to date</h2>
                <h3 className="pWords">plannerCORTEX displays a users tasks both on a day to day basis, and on a weekly basis so that you can stay on top of all your tasks!</h3>
            </div>
            <div id="box-2">
                <img src={image} className="pIcon" alt="key2"></img>
                <h2 className="pPhrase">Prioritize your life</h2>
                <h3 className="pWords">With our brand new importance feature, you can select which tasks ought to be done first, and which ones you want to save for later.</h3>
            </div>
            <div id="box-3">
                <img src={image} className="pIcon" alt="key3"></img>
                <h2 className="pPhrase">Add tasks with just a few clicks</h2>
                <h3 className="pWords">Inputing tasks has never been easier, create, edit or delete tasks within seconds</h3>
            </div>
            <div id="box-4">
                <img src={image} className="pIcon" alt="key4"></img>
                <h2 className="pPhrase">Never miss another deadline</h2>
                <h3 className="pWords">Schedule alerts to ensure no project deadline ever slips past you again</h3>
            </div>
        </div>
    </div>
{/*
    <div>
        <h2 className="planning">mollis</h2>
        <div id="box-container">
            <div id="box-1">
                <img src={image} className="pIcon" alt="feature1"></img>
                <h2 className="pPhrase">tortor consequat</h2>
                <h3 className="pWords">egestas maecenas pharetra convallis posuere morbi leo urna molestie at</h3>
            </div>
            <div id="box-2">
                <img src={image} className="pIcon" alt="feature2"></img>
                <h2 className="pPhrase">etiam dignissim</h2>
                <h3 className="pWords">viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque</h3>
            </div>
            <div id="box-3">
                <img src={image} className="pIcon" alt="feature4"></img>
                <h2 className="pPhrase">purus faucibus</h2>
                <h3 className="pWords">eu sem integer vitae justo eget magna fermentum iaculis</h3>
            </div>
            <div id="box-4">
                <img src={image} className="pIcon" alt="key4"></img>
                <h2 className="pPhrase">elementum facilisisa</h2>
                <h3 className="pWords">pharetra massa massa ultricies mi quis hendrerit dolor magna eget</h3>
            </div>
        </div>
    </div>
*/}
            </div>
        )
    }
}
export default HomePage;
