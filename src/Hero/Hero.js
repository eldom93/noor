import React from "react";
import "./Hero.css";

class Hero extends React.Component {
    playVideo() {
        // You can use the play method as normal on your video ref
        this.refs.vidRef.play();
      }
      
      pauseVideo() {
        // Pause as well
        this.refs.vidRef.pause();
      }
      
      // You can pass your function references to your child components as props (here passing down to the Buttons component)
      render() {
        return(
          <div>
           
           <video id="myVideo" ref="vidRef" src="https://clips.vorwaerts-gmbh.de/VfE_html5.mp4" type="video/mp4">
          Your browser does not support HTML5 video.
        </video>

        <div className="content">
          <h1>AL NOUR SCHOOL</h1>
          <p>
            Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat
            phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum
            maiestatis persequeris pro, pri ponderum tractatos ei. Id qui nemore
            latine molestiae, ad mutat oblique delicatissimi pro.
          </p>
          <Buttons playVideo={this.playVideo.bind(this)} pauseVideo={this.pauseVideo.bind(this)} />
          
        </div>
        </div>
        );
      }
    }



class Buttons extends React.Component {
    render(){
      return(
        <div>
          <button id='playButton' onClick={this.props.playVideo}>Play!</button>
          <button id='pauseButton' onClick={this.props.pauseVideo}>Pause!</button>
        </div>
      );
    }
  }

  export default Hero;
