import logo from "../assets/logo.svg";
import "../styles/Navigation.css";

import { Link } from "react-router-dom";

function Navigation() {
	return (
		<nav className="navbar">
			<Link to="/">
			<img src={logo} alt="Logo" className="navbar__img" />
			</Link>

			<div className="navbar__links__wrapper">
				<Link to="/" className="navbar__links__style">Accueil</Link>
				<Link to="/about" className="navbar__links__style">A Propos</Link>

			</div>
		</nav>
	);
}

export default Navigation;
