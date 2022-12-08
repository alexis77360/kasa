import logo from "../assets/logo.svg";
import "../styles/Navigation.css";

function Navigation() {
	return (
		<nav className="navbar">
			<img src={logo} alt="Logo" className="navbar__img" />

			<div className="navbar__links">
				<div className="navbar__links__style">Accueil</div>
				<div className="navbar__links__style">A Propos</div>
			</div>
		</nav>
	);
}

export default Navigation;
