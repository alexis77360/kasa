import logo from "../assets/logo.svg";
import "../styles/Navigation.css";

import { Link, NavLink } from "react-router-dom";

//? Permets de créer la barre de navigation avec les liens vers les pages d'accueil et à propos.
function Navigation() {
	return (
		<nav className="navbar">
			<Link to="/">
				<img src={logo} alt="Logo" className="navbar__img" />
			</Link>

			<div className="navbar__links__wrapper">
				<NavLink
					to="/"
					style={({ isActive }) =>
						isActive ? { textDecoration: "underline" } : undefined
					}
					className="navbar__links"
				>
					Accueil
				</NavLink>
				<NavLink
					to="/about"
					style={({ isActive }) =>
						isActive ? { textDecoration: "underline" } : undefined
					}
					className="navbar__links"
				>
					A Propos
				</NavLink>
			</div>
		</nav>
	);
}

export default Navigation;
