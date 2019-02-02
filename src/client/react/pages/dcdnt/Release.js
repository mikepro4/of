import React, { Component } from "react";
import { connect } from "react-redux";
import posed from 'react-pose';

const ImageContainer = posed.div({
    exit: {
      opacity: 0,
      translateY: 30
    },
    enter: {
      opacity: 1,
      translateY: 0,
      transition: {
        opacity: {
          duration: 2000,
  
        },
        translateY: {
          duration: 2000,
          easing: "cubic-bezier(.19,1,.22,1)"
        },
       },
     delay: ({order}) => {
        return 0
     }
    }
  });

class Release extends Component {

    state = {
        isVisible: false,
    };
    
    componentDidUpdate(prevprops) {
        if(this.props.isVisible == true && this.state.isVisible == false) {
          this.setState({
            isVisible: true
          })
        }
      }

    getPose() {
        if(this.refs.releaseCover) {
            let bodyHeight = document.getElementById("body").clientHeight
            if( this.state.isVisible && (this.refs.releaseCover.offsetTop <= ( this.props.totalScrolledPixels + (bodyHeight/1.7)))) {
                return "enter"
            } else {
                return "exit"
            }
        } else {
            return "exit"
        }
    }
    getHeight = () => {
        if(this.refs.releaseCover) {
            return this.refs.releaseCover.clientWidth
        }
    }


	render() {
		return (

            <div className="release-container">

                <div className="of-grid-row">

                    <div className="of-grid-gutter-4 of-grid-5" ref="releaseCover">
                        <div 
                            className="release-cover"
                            style={{
                                height: this.getHeight()
                            }}
                        >
                            <ImageContainer
                                initialPose="exit"
                                className="image-container"
                                order={this.props.release.order}
                                pose={this.getPose()}
                            >
                                <img src={this.props.release.imageUrl}/>
                            </ImageContainer>
                        </div>
                    </div>

                    <div className="of-grid-gutter-1 of-grid-8">
                        <div 
                            className="release-details"
                            style={{
                                height: this.getHeight()
                            }}
                        >

                            {this.props.release.new ? (
                                <div className="label-container">
                                    <span className="label">NEW RELEASE</span>
                                </div>
                            ) : ""}

                            <div className="release-label">
                                {this.props.release.label}
                            </div>

                            <div className="release-name">
                                {this.props.release.name}
                            </div>

                            <div className="release-mix">
                                {this.props.release.mixType}
                            </div>

                            <ul className="release-metadata">
                                {this.props.release.metadata.map((metadata , i)  => {
                                   return( 
                                    <li key={i} className="release-single-metadata">
                                        {metadata.key}: {metadata.value}
                                    </li>
                                   )
                                })
                            }
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        )
	}
}

function mapStateToProps({app}) {
	return {
		totalScrolledPixels: app.totalScrolledPixels,
        clientHeight: app.clientHeight
  };
}

export default connect(mapStateToProps, {})(Release);
