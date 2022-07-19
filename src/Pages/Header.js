import React from "react";
import Navigation from "../Components/Navigation";
import bg from "../media/images/bg1.jpg";

class Header extends React.Component {
	render() {
		return (
			<header>
				<div className="container">
					<div className="background-container bg-red-filter">
						<img src={bg} alt="Background" />
					</div>
					<div className="wrapper">
						<Navigation />
						<h1>Delicious</h1>
						<p>Lorem ipsum dolor sit amet, consecteur adipiscing elit.<br /> Vivamus lacinia odio virae vestibulum vestibulum.</p>
						<button>Order now</button>
					</div>
				</div>
			</header>
		)
	}
}

export default Header;