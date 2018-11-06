import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import classNames from "classnames"

class MainLinks extends Component {
	isActivePath = (pathname) => {
		return this.props.location.pathname.indexOf(pathname) !== -1
	}
	render() {

    let links = [
      {
        url: "/about",
        name: "About"
      },
      {
        url: "/portfolio",
        name: "Portfolio"
      },
      {
        url: "/services",
        name: "Services"
      },
      {
        url: "/contact",
        name: "Contact"
      },
      {
        url: "/faq",
        name: "FAQ"
      }
    ]

		return (
			<div className="main-links-container">
        <ul className={classNames({"active": !(this.props.location.pathname == "/")}, "main-links")}>

          {links.map(link => {
            return (
              <li key={link.url} className={classNames("main-link-container", {
                  "main-link-active": this.isActivePath(link.url)
                })}
              >
                <Link to ={link.url} className="main-link">
                  <span className="main-link-label">{link.name}</span>
                </Link>
              </li>
            )
          })}
        </ul>
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
