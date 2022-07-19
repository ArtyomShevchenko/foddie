import React from "react";
import './App.css';
import "./fonts.css";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";

import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Promo from "./Pages/Promo";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";

function App() {
	return (
		<div className="App">
			<Header />
			
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/product" element={<Product />} />
				<Route path="/promo" element={<Promo />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<Error />} />
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
