import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import classNames from "classnames"
import posed, { PoseGroup } from 'react-pose';

const Parent = posed.ul({
	open: {
		opacity: 1,
		delayChildren: 500,
	  staggerChildren: 70,
		transition: {
			duration: 2200
		}
	},
  closed: { opacity: 0 },
	initialPose: 'closed'
});

const Child = posed.div({
	open: { y: 0, opacity: 1, transition: {duration: 300}  },
  closed: { y: 50, opacity: 0},
	initialPose: 'closed'
});


class MainLinks extends Component {
	isActivePath = (pathname, home) => {
      if(pathname.length == 1 && this.props.location.pathname == '/') {
        return true
      }
      return this.props.location.pathname.indexOf(pathname) !== -1 && pathname.length > 1
	}
	render() {

    let links = [
      {
        url: "/",
        name: "Releases"
      },
      {
        url: "/live",
        name: "Live Videos"
      },
      {
        url: "/about",
        name: "About"
      },
      {
        url: "/contact",
        name: "Contact"
      }
    ]

		const {isVisible} = this.props

		return (
			<div className="main-links-container">
        <Parent
					className={classNames({"active": true}, "main-links")}
					initialPose="closed"
					pose={isVisible ? 'open' : 'closed'}
				>

          {links.map(link => {
            return (
              <li key={link.url} className={classNames("main-link-container", {
                  "main-link-active": this.isActivePath(link.url, 'home')
                })}
              >
								<Child>
	                <Link to ={link.url} className="main-link">
	                  <span className="main-link-label">{link.name}</span>
	                </Link>
								</Child>
              </li>
            )
          })}
        </Parent>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		location: state.router.location
	};
}

export default connect(mapStateToProps, {})(MainLinks);
