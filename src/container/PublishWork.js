import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

// Components
import Input from "../components/Input";
import Textarea from "../components/Textarea";

// Image
import Deconnexion from "../img/deconnexion.svg";

const PublishWork = () => {
	// check token
	const token = Cookies.get("token");
	const history = useHistory();

	const [tokenExist, setTokenExist] = useState(false);
	const [valueCover, setValueCover] = useState({});
	const [valueSlider, setValueSlider] = useState();
	const [valueTitle, setValueTitle] = useState("");
	const [valueTextarea, setvalueTextarea] = useState("");

	const [valueCheckBox, setValueCheckbox] = useState({
		illustrator: "",
		photoshop: "",
		indesign: "",
		afterEffect: "",
		html: "",
		css: "",
		javascript: "",
		bootstrap: "",
		wordpress: "",
		react: "",
		reactNative: "",
		heroku: "",
		nodeJs: "",
		git: "",
		github: "",
		stripe: "",
		cloudinary: "",
		express: "",
		mongoDb: "",
	});

	useEffect(() => {
		if (token) {
			setTokenExist(true);
		}
	}, []);

	const handleDeconnexion = () => {
		Cookies.remove("token");
		history.push("/");
	};

	const handleCheckbox = (event) => {
		setValueCheckbox({
			...valueCheckBox,
			[event.target.name]: event.target.id,
		});
	};

	const handleCover = (event) => {
		setValueCover(event.target.files[0]);
	};

	const handleSlider = (event) => {
		setValueSlider(event.target.files);
	};

	const handleTitle = (event) => {
		setValueTitle(event.target.value);
	};

	const handleTextarea = (event) => {
		setvalueTextarea(event.target.value);
	};

	// soumission du formulaire
	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData();
		formData.append("valueCover", valueCover);
		formData.append("valueTitle", valueTitle);
		formData.append("valueTextarea", valueTextarea);

		////////////

		const tabCheckBox = Object.values(valueCheckBox);
		console.log(tabCheckBox);
		for (let i = 0; i < tabCheckBox.length; i++) {
			if (tabCheckBox[i] !== "") {
				formData.append(`check ${[i]}`, tabCheckBox[i]);
			}
		}

		///////////

		if (valueSlider !== undefined) {
			for (let i = 0; i < valueSlider.length; i++) {
				formData.append(`slider ${[i]}`, valueSlider[i]);
			}
		}

		try {
			const response = await axios.post(
				process.env.REACT_APP_PUBLISH_LOCAL,
				formData,
				{
					headers: {
						Authorization: "Bearer " + token,
						"Content-Type": "multipart/form-data",
					},
				}
			);
			console.log(response.data);
			setValueTitle("");
			setvalueTextarea("");
		} catch (error) {}
	};

	return (
		<div>
			{tokenExist === true ? (
				<div id="publish-work">
					<form onSubmit={handleSubmit}>
						<div className="deconnexion">
							<div className="btn" onClick={handleDeconnexion}>
								<img src={Deconnexion} />
							</div>
						</div>
						<Input
							label="Cover"
							type="file"
							onChange={handleCover}
						/>

						<Input
							label="Images slider"
							type="file"
							multiple={true}
							onChange={handleSlider}
						/>

						{/* SKILLS - DEBUT */}
						<div className="checkbox">
							<div>
								<Input
									id="Illustrator"
									type="checkbox"
									label="Illustrator"
									value={valueCheckBox.illustrator}
									onChange={handleCheckbox}
									name="Illustrator"
								/>
							</div>
							<div>
								<Input
									id="Photoshop"
									type="checkbox"
									label="Photoshop"
									value={valueCheckBox.photoshop}
									onChange={handleCheckbox}
									name="Photoshop"
								/>
							</div>
							<div>
								<Input
									id="Indesign"
									type="checkbox"
									label="Indesign"
									value={valueCheckBox.indesign}
									onChange={handleCheckbox}
									name="Indesign"
								/>
							</div>
							<div>
								<Input
									id="After Effect"
									type="checkbox"
									label="After Effect"
									value={valueCheckBox.afterEffect}
									onChange={handleCheckbox}
									name="After Effect"
								/>
							</div>
							<div>
								<Input
									id="Html 5"
									type="checkbox"
									label="Html 5"
									value={valueCheckBox.html}
									onChange={handleCheckbox}
									name="Html 5"
								/>
							</div>
							<div>
								<Input
									id="Css 3"
									type="checkbox"
									label="Css 3"
									value={valueCheckBox.css}
									onChange={handleCheckbox}
									name="Css 3"
								/>
							</div>
							<div>
								<Input
									id="Javascript"
									type="checkbox"
									label="Javascript"
									value={valueCheckBox.javascript}
									onChange={handleCheckbox}
									name="Javascript"
								/>
							</div>
							<div>
								<Input
									id="Bootstrap"
									type="checkbox"
									label="Bootstrap"
									value={valueCheckBox.bootstrap}
									onChange={handleCheckbox}
									name="Bootstrap"
								/>
							</div>
							<div>
								<Input
									id="WordPress"
									type="checkbox"
									label="WordPress"
									value={valueCheckBox.wordpress}
									onChange={handleCheckbox}
									name="WordPress"
								/>
							</div>
							<div>
								<Input
									id="React Js"
									type="checkbox"
									label="React Js"
									value={valueCheckBox.react}
									onChange={handleCheckbox}
									name="React Js"
								/>
							</div>
							<div>
								<Input
									id="React Native"
									type="checkbox"
									label="React Native"
									value={valueCheckBox.reactNative}
									onChange={handleCheckbox}
									name="React Native"
								/>
							</div>
							<div>
								<Input
									id="Heroku"
									type="checkbox"
									label="Heroku"
									value={valueCheckBox.heroku}
									onChange={handleCheckbox}
									name="Heroku"
								/>
							</div>
							<div>
								<Input
									id="Node Js"
									type="checkbox"
									label="Node Js"
									value={valueCheckBox.nodeJs}
									onChange={handleCheckbox}
									name="Node Js"
								/>
							</div>
							<div>
								<Input
									id="Git"
									type="checkbox"
									label="Git"
									value={valueCheckBox.git}
									onChange={handleCheckbox}
									name="Git"
								/>
							</div>
							<div>
								<Input
									id="GitHub"
									type="checkbox"
									label="GitHub"
									value={valueCheckBox.github}
									onChange={handleCheckbox}
									name="GitHub"
								/>
							</div>
							<div>
								<Input
									id="Stripe"
									type="checkbox"
									label="Stripe"
									value={valueCheckBox.stripe}
									onChange={handleCheckbox}
									name="Stripe"
								/>
							</div>
							<div>
								<Input
									id="Cloudinary"
									type="checkbox"
									label="Cloudinary"
									value={valueCheckBox.cloudinary}
									onChange={handleCheckbox}
									name="Cloudinary"
								/>
							</div>
							<div>
								<Input
									id="Express"
									type="checkbox"
									label="Express"
									value={valueCheckBox.express}
									onChange={handleCheckbox}
									name="Express"
								/>
							</div>
							<div>
								<Input
									id="MongoDB"
									type="checkbox"
									label="MongoDB"
									value={valueCheckBox.mongoDb}
									onChange={handleCheckbox}
									name="MongoDB"
								/>
							</div>
						</div>
						{/* SKILLS - FIN */}
						<Input
							label="Titre du projet"
							type="text"
							value={valueTitle}
							onChange={handleTitle}
						/>
						<Textarea
							label="Description du projet"
							type="textarea"
							rows={5}
							value={valueTextarea}
							onChange={handleTextarea}
						/>
						<Input type="submit" />
					</form>
				</div>
			) : (
				<div className="go">
					<Link to="/">Go to home</Link>
				</div>
			)}
		</div>
	);
};

export default PublishWork;
