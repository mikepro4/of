import React from "react";
import App from "../App";
import About from "../react/pages/about";
import Releases from "../react/pages/dcdnt";
import Live from "../react/pages/live";

export default [
	{
		...App,
		routes: [
			{
				...Releases,
				path: "/",
				exact: true,
				params: {
					name: "home"
				}
			},
			{
				...About,
				path: "/about",
				exact: true,
				params: {
					name: "about"
				}
			},
			{
				...Live,
				path: "/live",
				exact: true,
				params: {
					name: "live"
				}
			}
		]
	}
];
