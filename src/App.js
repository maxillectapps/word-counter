/** @format */
import { useState } from "react";
import Header from "./Components/Header";
import TextEditor from "./Components/TextEditor";
import Footer from "./Components/Footer";
import logo from "./logo.svg";

function App() {
	const { darkMode, setDarkMode } = useState(false);

	return (
		<>
			<Header {...darkMode} />
			<TextEditor />
			<Footer />
		</>
	);
}

export default App;
