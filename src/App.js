import React, { useState, useEffect } from "react";
import { useForm } from "./useForm";
import { useFetch } from "./useFetch";

const App = () => {
	const [value, setValue] = useForm({ email: "", password: "" });

	useFetch("http://numbersapi.com/42/trivia");

	return (
		<div>
			<input
				name="email"
				value={value.email}
				onChange={setValue}
				type="email"
			/>
			<input
				name="password"
				type="password"
				value={value.password}
				onChange={setValue}
			/>
		</div>
	);
};

export default App;
