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
                <h1 className="title">plannerCORTEX</h1>
                <h3 className="phrase">sed vulputate odio ut enim blandit volutpat maecenas</h3>
            </div>
            <div>
                <h3 className="blocktext1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ultrices tincidunt arcu non sodales.</h3>
                <a href="#home"><img src={image} className="image" alt="picture"></img></a>
                <h2 className="bigWords">a pellentesque sit amet porttitor eget dolor morbi</h2>
                <h3 className="blocktext2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Sit amet porttitor eget dolor morbi non arcu. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida.</h3>
                <h3 className="blocktext2">Massa vitae tortor condimentum lacinia quis vel eros donec. Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Vitae congue eu consequat ac felis donec et odio pellentesque. Egestas maecenas pharetra convallis posuere morbi. Viverra mauris in aliquam sem fringilla ut morbi. Curabitur gravida arcu ac tortor dignissim convallis aenean et. </h3>
            </div>
            <div className="section3">
                <h2 className="planning">quam adipiscing vitae</h2>
            <div id="box-container">
            <div id="box-1">
                <img src={image} className="pIcon" alt="key1"></img>
                <h2 className="pPhrase">nulla facilisi nullam vehicula ipsum a</h2>
                <h3 className="pWords">pellentesque sit amet porttitor eget dolor morbi non arcu risus</h3>
            </div>
            <div id="box-2">
                <img src={image} className="pIcon" alt="key2"></img>
                <h2 className="pPhrase">sed risus ultricies tristique nulla</h2>
                <h3 className="pWords">nisi lacus sed viverra  in hac habitasse platea dictumst</h3>
            </div>
            <div id="box-3">
                <img src={image} className="pIcon" alt="key3"></img>
                <h2 className="pPhrase">nisl tincidunt eget nullam non</h2>
                <h3 className="pWords">mauris a diam maecenas sed enim ut sem viverra aliquet eget sit quam</h3>
            </div>
            <div id="box-4">
                <img src={image} className="pIcon" alt="key4"></img>
                <h2 className="pPhrase">sed risus ultricies tristique nulla</h2>
                <h3 className="pWords">enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis</h3>
            </div>
        </div>
    </div>
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
            </div>
        )
    }
}
export default HomePage;