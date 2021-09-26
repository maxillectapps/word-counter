/** @format */

import React, { useState } from "react";

function TextEditor() {
	const [text, setText] = useState();

	const handleOnChange = (event) => {
		setText(event.target.value);
	};

	const handleUpperCase = () => {
		console.log("Uppercase Clicked!");
		let Uppercase = text.toUpperCase();
		setText(Uppercase);
	};

	const handleLowerCase = () => {
		console.log("Lowercase Clicked!");
		let Lowercase = text.toLowerCase();
		setText(Lowercase);
	};

	const handleClearText = () => {
		console.log("Lowercase Clicked!");
		setText("");
	};

	// const handleCapitalize = () => {
	// 	console.log("Lowercase Clicked!");
	// 	let Capitalize = text.;
	// 	setText(Capitalize);
	// };

	return (
		<div>
			<div className="mb-3 me-5 ms-5 mt-5">
				<label htmlFor="exampleFormControlTextarea1" className="form-label">
					Text Editor
				</label>
				<textarea
					className="form-control"
					id="exampleFormControlTextarea1"
					rows="10"
					placeholder="Type or paste your text here..."
					onChange={handleOnChange}
					value={text}
				></textarea>
			</div>

			<div
				className="btn-group mx-5 my-5 mt-1"
				role="group"
				aria-label="Basic example"
			>
				<button
					type="button"
					className="btn btn-success"
					onClick={handleUpperCase}
				>
					Uppercase
				</button>
				<button
					type="button"
					onClick={handleLowerCase}
					className="btn btn-success mx-2"
				>
					Lowercase
				</button>
				<button
					type="button"
					onClick={handleClearText}
					className="btn btn-success"
				>
					Clear Text
				</button>
				<button
					type="button"
					onClick={handleClearText}
					className="btn btn-success mx-2"
				>
					Copy Text
				</button>
				<button
					type="button"
					onClick={handleClearText}
					className="btn btn-success"
				>
					Capitalize
				</button>
				<button
					type="button"
					onClick={handleClearText}
					className="btn btn-success mx-2"
				>
					Remove Spaces
				</button>
			</div>
		</div>
	);
}

export default TextEditor;
