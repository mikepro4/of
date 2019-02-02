import React from "react";
import App from "../App";
import About from "../react/pages/about";
import Releases from "../react/pages/dcdnt";

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
			}
		]
	}
];
