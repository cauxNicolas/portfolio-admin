import React, { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
// Components
import Input from "../components/Input";
import Textarea from "../components/Textarea";

const PublishWork = () => {
	// check token
	const token = Cookies.get("token");

	const [tokenExist, setTokenExist] = useState(false);
	const [valueCover, setValueCover] = useState({});
	const [valueSlider, setValueSlider] = useState();
	const [valueCheckbox, setValuCheckbox] = useState();
	const [valueTitle, setValueTitle] = useState("titre");
	const [valueTextarea, setvalueTextarea] = useState("textearea");

	const handleCover = (event) => {
		setValueCover(event.target.files[0]);
	};

	const handleSlider = (event) => {
		setValueSlider(event.target.files);
	};

	const handleCheckbox = (event) => {
		setValuCheckbox(event.target.value);
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
		formData.append("file", valueCover);
		formData.append("valueTitle", valueTitle);
		formData.append("valueTextarea", valueTextarea);
		try {
			const response = await axios.post(
				process.env.REACT_APP_PUBLISH,
				formData,
				{
					headers: {
						Authorization: "Bearer " + token,
						"Content-Type": "multipart/form-data",
					},
				}
			);
			console.log(response.data);
		} catch (error) {}
	};

	return (
		<div>
			<div>
				<div>
					<form onSubmit={handleSubmit}>
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
									value={valueCheckbox}
									onChange={handleCheckbox}
								/>
							</div>
							<div>
								<Input
									id="Photoshop"
									type="checkbox"
									label="Photoshop"
								/>
							</div>
							<div>
								<Input
									id="Indesign"
									type="checkbox"
									label="Indesign"
								/>
							</div>
							<div>
								<Input
									id="After Effect"
									type="checkbox"
									label="After Effect"
								/>
							</div>
							<div>
								<Input
									id="Html 5"
									type="checkbox"
									label="Html 5"
								/>
							</div>
							<div>
								<Input
									id="Css 3"
									type="checkbox"
									label="Css 3"
								/>
							</div>
							<div>
								<Input
									id="Javascript"
									type="checkbox"
									label="Javascript"
								/>
							</div>
							<div>
								<Input
									id="Bootstrap"
									type="checkbox"
									label="Bootstrap"
								/>
							</div>
							<div>
								<Input
									id="WordPress"
									type="checkbox"
									label="WordPress"
								/>
							</div>
							<div>
								<Input
									id="React Js"
									type="checkbox"
									label="React Js"
								/>
							</div>
							<div>
								<Input
									id="React Native"
									type="checkbox"
									label="React Native"
								/>
							</div>
							<div>
								<Input
									id="Heroku"
									type="checkbox"
									label="Heroku"
								/>
							</div>
							<div>
								<Input
									id="Node Js"
									type="checkbox"
									label="Node Js"
								/>
							</div>
							<div>
								<Input id="Git" type="checkbox" label="Git" />
							</div>
							<div>
								<Input
									id="GitHub"
									type="checkbox"
									label="GitHub"
								/>
							</div>
							<div>
								<Input
									id="Stripe"
									type="checkbox"
									label="Stripe"
								/>
							</div>
							<div>
								<Input
									id="Cloudinary"
									type="checkbox"
									label="Cloudinary"
								/>
							</div>
							<div>
								<Input
									id="Express"
									type="checkbox"
									label="Express"
								/>
							</div>
							<div>
								<Input
									id="MongoDB"
									type="checkbox"
									label="MongoDB"
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
			</div>
		</div>
	);
};

export default PublishWork;
