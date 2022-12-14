import { useParams } from "react-router-dom";
import apart from "../datas/data.json";
import Slider from "../components/Slider";
import Dropdown from "../components/Dropdown";
import Tag from "../components/Tag";
import "../styles/Apartment.css";

const Apartment = () => {
	const { apartmentId } = useParams();

	//? On récupère l'id de l'appartement dans l'url et on le compare à l'id de l'appartement dans le tableau d'appartements
	const logement = apart.find((apart) => apart.id === apartmentId);

	
	

	return (
		<main className="main">
			<div className="apartment__container">
				<Slider images={logement.pictures} />
				<h1 className="apartment__title">{logement.title}</h1>
				<h2 className="apartment__location">{logement.location}</h2>

				<div className="apartment__tags">
					{logement.tags.map((tag, index) => (
						<Tag key={index} tag={tag} />
					))}
				</div>

				<div className="apartment__dropdown__wrapper">
					<div className="apartment__dropdown">
						<Dropdown titre="Description" texte={logement.description} />
					</div>
					<div className="apartment__dropdown">
						<Dropdown titre="Equipements" texte={logement.equipments} />
						
					</div>
				</div>
			</div>
		</main>
	);
};

export default Apartment;
