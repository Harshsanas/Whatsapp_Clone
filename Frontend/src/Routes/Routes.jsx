import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../Components/Home/Home";
import { Login } from "../Components/Login/Login";
import { Navbar } from "../Components/Navbar/Navbar";
// import { PrivateRoute } from "./PrivateRoutes";
export const Routes = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/login">
					<Login />
				</Route>

				<Route>
					<h2>Page not found</h2>
				</Route>
			</Switch>
		</Router>
	);
};
