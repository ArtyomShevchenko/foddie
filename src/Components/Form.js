import React, { useState } from "react";

function Form() {
	const [value, setValue] = useState(false);

	function handleChange(event) {
		setValue(event.target.value);
	}

	function submitForm(event) {
		alert(value);
		event.preventDefault();
	}

	return (
		<form onSubmit={submitForm}>
			<input type="mail" placeholder="Your Email" onChange={handleChange} />
			<button type="submit">Subscribe</button>
		</form>
	);
}

export default Form;