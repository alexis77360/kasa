import "../styles/Dropdown.css";

const Dropdown = ({ titre, texte }) => {
	return (
		<div className="dropdown">
			<button type="button" className="dropdown__button">
				<h2 className="dropdown__title">{titre}</h2>
				<p className="dropdown__arrow"><i className="fas fa-chevron-up"></i></p>
			</button>
				<p className="dropdown__text">{texte}</p>
		</div>
	);
};

export default Dropdown;
