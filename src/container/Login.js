import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
	const [login, setLogin] = useState({
		passOne: "",
		passTwo: "",
	});
	const history = useHistory();

	const valueConnect = (event) => {
		setLogin({ ...login, [event.target.name]: event.target.value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (login.passOne !== "" && login.passTwo !== "") {
			try {
				const response = await axios.post(process.env.REACT_APP_LOGIN, {
					passOne: login.passOne,
					passTwo: login.passTwo,
				});
				Cookies.set("token", response.data.token);
				history.push("/publish-work");
			} catch (error) {
				console.log(error.message);
			}
		}
	};

	return (
		<div id="login" className="content">
			<form onSubmit={handleSubmit}>
				<h2>Connexion</h2>
				<input
					type="password"
					name="passOne"
					value={login.passOne}
					onChange={valueConnect}
				/>
				<input
					type="password"
					name="passTwo"
					value={login.passTwo}
					onChange={valueConnect}
				/>
				<input type="submit" value="Valider" />
			</form>
		</div>
	);
};

export default Login;
