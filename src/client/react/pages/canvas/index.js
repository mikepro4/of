import React, { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import posed, { PoseGroup } from 'react-pose';
import SplitText from 'react-pose-text';
import { Slider } from "@blueprintjs/core";

class Canvas extends Component {
	state = {
    points: [],
    test: 0,
    width: 300,
    height: 300,
    radius: 100,
    rotate: 0,
    rotate_speed_value: 0.001,
    rotate_speed: this.state.rotate_speed_value * 0.1 + 0.001,
    friction: 0.01 * 0.8 + 0.1,
    speed: 0.01 * 0.2 + 0.03,
    step: 5 * 0.5 + 0.0001,
    freq: 0.0001 * 0.09 + 0.01,
    bold_rate: 1 * 0.3 + 0.1,
    // rotate_speed: 0.001,
    // friction:  0.001,
    // speed:  0.001,
    // step:  0.001,
    // freq:  0.001,
    // bold_rate:  0.001,
    x: 150,
    y: 150
  };

	renderHead = () => (
		<Helmet>
			<title>OF – Home Page</title>
			<meta property="og:title" content="Homepage" />
		</Helmet>
	)

  componentDidMount = () => {
    this.paint()
  }

  createPoint(x, y) {
    let point = {
      x: x,
      y: y,
      vx: 0,
      vy: 0
    }
    return point
  }

  generatePoints = () => {
    let points = []
    const pointsAmount = 1024
    for (var i = 0; i < pointsAmount; i++) {
      var pt = this.createPoint(
        Math.random(1) * this.state.width,
        Math.random(1) * this.state.height
      );
      points.push(pt)
    }
    this.setState({
      points: points
    })

    return points

  }

  paint = () => {
    let canvas = this.refs.canvas;
    let ctx = canvas.getContext('2d')
    ctx.fillStyle = "rgba(0, 0, 0, 255)";
    ctx.width = this.state.width;
    ctx.height = this.state.height;
    let points = this.generatePoints()

    this.update();

    // ctx.fillRect(0, 0, ctx.width, ctx.height);
  }

  update = () => {
    let canvas = this.refs.canvas;
    let ctx = canvas.getContext('2d')
    let context = new AudioContext();
    let analyser = context.createAnalyser();
    let audio = this.refs.audio;
    audio.crossOrigin = "anonymous";
    let audioSrc = context.createMediaElementSource(audio);
    audioSrc.connect(analyser);
    audioSrc.connect(context.destination);
    this.renderFrame(ctx, analyser)
  }

  renderFrame = (ctx, analyser) => {
    ctx.fillStyle = "rgba(0,0, 0, 255)";
    ctx.fillRect(0, 0, this.state.width * 2, this.state.width * 2);

    this.setState({
      rotate: this.state.rotate + this.state.rotate_speed
    })

    let freqData = new Uint8Array(analyser.frequencyBinCount)
    analyser.getByteFrequencyData(freqData)

    for (let i = 0; i < this.state.points.length; i++) {
      // console.log(freqData[i]/2)
      let point = this.state.points[i];
      let t_radius =
        Math.cos(this.state.rotate * freqData[i]/2 * 2.321 + this.state.freq * freqData[i]/2 * i) * this.state.radius * this.state.bold_rate +
        this.state.radius;
      let tx = this.state.x + Math.cos(this.state.rotate + this.state.step * i) * t_radius;
      let ty = this.state.y + Math.sin(this.state.rotate + this.state.step * i) * t_radius;

      point.vx += (tx - point.x) * this.state.speed;
      point.vy += (ty - point.y) * this.state.speed;

      point.x += point.vx ;
      point.y += point.vy;

      point.vx *= this.state.friction;
      point.vy *= this.state.friction;

      if (point.x >= 0 && point.x <= this.state.width && point.y >= 0 && point.y <= this.state.height) {
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.fillRect(point.x, point.y, 1.3, 1.3);
      }
    }

    requestAnimationFrame(() => this.renderFrame(ctx, analyser));

  }

   createVisualization = () => {
       // let context = new AudioContext();
       // let analyser = context.createAnalyser();
       // let canvas = this.refs.analyzerCanvas;
       // let ctx = canvas.getContext('2d');
       // let audio = this.refs.audio;
       // audio.crossOrigin = "anonymous";
       // let audioSrc = context.createMediaElementSource(audio);
       // audioSrc.connect(analyser);
       // audioSrc.connect(context.destination);
       //
       // function renderFrame(){
       //     let freqData = new Uint8Array(analyser.frequencyBinCount)
       //     requestAnimationFrame(renderFrame)
       //     analyser.getByteFrequencyData(freqData)
       //     canvas.width = 1024
       //     ctx.clearRect(0, 0, canvas.width, canvas.height)
       //     // console.log(freqData)
       //     ctx.fillStyle = '#9933ff';
       //     let bars = 1024;
       //     for (var i = 0; i < bars; i++) {
       //         let bar_x = i * 3;
       //         let bar_width = 2;
       //         let bar_height = -(freqData[i] / 2);
       //         ctx.fillRect(bar_x, canvas.height, bar_width, bar_height)
       //     }
       // };
       // renderFrame()
   }

	render() {
		return (
      <div className="route-container route-canvas">

        <div className="of-grid-content-layer">

          <div className="screen">
            <div className="of-grid-row">
              <div
                className="of-grid-gutter-4 of-grid-5"
              >
                <audio
                  ref="audio"
                  autoPlay={true}
                  controls={true}
                  src={"/sounds/dcdnt.wav"}
                  >
                  </audio>
                <canvas
                  ref="canvas"
                  className="canvas"
                  width={this.state.width}
                  height={this.state.height}
                />

                <Slider
                    min={-1}
                    max={1}
                    stepSize={0.001}
                    labelStepSize={10}
                    onChange={(value) => {
                      this.setState({
                        rotate_speed_value: value
                      })
                    }}
                    showTrackFill={false}
                    value={this.state.rotate_speed_value}
                />

              </div>
            </div>
          </div>

        </div>
      </div>
		);
	}
}

function mapStateToProps({ app }) {
	return {
    appVisible: app.appVisible
  };
}

export default {
	component: connect(mapStateToProps, {})(Canvas)
}
