import React, { Component } from "react";
import { connect } from "react-redux";

class Release extends Component {
	render() {
		return (

            <div className="section-container">
                <div className="of-grid-gutter-4 of-grid-15 ">

                    {this.props.release.name}

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
