import React from "react";
import { Link } from "react-router-dom";
import facebookIcon from "../media/icons/facebook.svg"
import twitterIcon from "../media/icons/twitter.svg"
import instagramIcon from "../media/icons/instagram.svg"
import whatsappIcon from "../media/icons/whatsapp.svg"

class Footer extends React.Component {
	render() {
		return (
			<footer>
				<div className="container">
					<div className="wrapper">
						<div>
							<h2>About Us</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at dignissim nunc, id maximus ex. Etiam nec dignissim elit, at dignissim enim. </p>
						</div>
						<ul>
							<h3>About</h3>
							<li><Link to="/history">History</Link></li>
							<li><Link to="/ourteam">Our Team</Link></li>
							<li><Link to="/brandguidelines">Brand Guidelines</Link></li>
							<li><Link to="/termsandcondition">Terms & Condition</Link></li>
							<li><Link to="/privacypolice">PrivacyPolice</Link></li>
						</ul>
						<ul>
							<h3>Services</h3>
							<li><Link to="/order">How to Order</Link></li>
							<li><Link to="/product">Our Product</Link></li>
							<li><Link to="/status">Order Status</Link></li>
							<li><Link to="/promo">Promo</Link></li>
							<li><Link to="/payment">Payment Method</Link></li>
						</ul>
						<ul>
							<h3>Follow</h3>
							<li><a href="https://www.facebook.com/" target={"_blank"}><img src={facebookIcon} alt="Icon" />Facebook</a></li>
							<li><a href="https://twitter.com/" target={"_blank"}><img src={twitterIcon} alt="Icon" />Twitter</a></li>
							<li><a href="https://www.instagram.com/" target={"_blank"}><img src={instagramIcon} alt="Icon" />Instagram</a></li>
							<li><a href="https://www.whatsapp.com/" target={"_blank"}><img src={whatsappIcon} alt="Icon" />Whatsapp</a></li>
						</ul>
					</div>
				</div>
			</footer>
		)
	}
}

export default Footer;