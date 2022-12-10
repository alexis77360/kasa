import "../styles/Dropdown.css";

const Dropdown = ({ titre, texte }) => {

	const DropDownOpen = (e) => {
		//? Fonction qui ajoute les classes pour dérouler le dropdown
		const addClass = () => {
			//! ajout la classe rotate à la classe dropdown__arrow
			e.target.classList.toggle("rotate");
			//! Retrouve l'élément parent du parent du parent du bouton (Dropdown) et ajout la classe show
			e.target.parentElement.parentElement.classList.toggle("show");
		};

		//? Attend 300ms avant d'appliquer la fonction addShow
		function wait() {
			setTimeout(addClass, 300);
		}
		wait();
	};

	return (
		<div className="dropdown">
			<button type="button" className="dropdown__button">
				<h2 className="dropdown__title">{titre}</h2>

				<i
					onClick={DropDownOpen}
					className="dropdown__arrow fas fa-chevron-up"
				></i>
			</button>
			<div className="tes">
				<p className="dropdown__text">{texte}</p>
			</div>
		</div>
	);
};

export default Dropdown;
