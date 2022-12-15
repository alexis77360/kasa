import { useParams } from "react-router-dom";
import apart from "../datas/data.json";
import Slider from "../components/Slider";
import Dropdown from "../components/Dropdown";
import Tag from "../components/Tag";
import "../styles/Apartment.css";
import redStar from "../assets/red_star.png";
import greyStar from "../assets/grey_star.png";
import NotFound from "./NotFound";

const Apartment = () => {
	const { apartmentId } = useParams();

	//? On récupère l'id de l'appartement dans l'url et on le compare à l'id de l'appartement dans le tableau d'appartements
	const logement = apart.find((apart) => apart.id === apartmentId);

	//? Si l'appartement n'existe pas, on affiche la page 404
	if (!logement) return <NotFound />;

	const stars = [1, 2, 3, 4, 5];
	const rating = logement.rating;

	return (
		<main className="main">
			<div className="apartment__container">
				<Slider images={logement.pictures} />
				<div className="apartment__wrapper">
					<div className="apartment__wrapper__left">
						<h1 className="apartment__title">{logement.title}</h1>
						<h2 className="apartment__location">{logement.location}</h2>
						<div className="apartment__tags">
							{logement.tags.map((tag, index) => (
								<Tag key={index} tag={tag} />
							))}
						</div>
					</div>

					<div className="apartment__wrapper__right">
						<div className="apartment__info">
							<div className="apartment__avatar">
								<p className="apartment__name">{logement.host.name}</p>
								<img
									className="apartment__image"
									src={logement.host.picture}
									alt="avatar"
								/>
							</div>

							<div className="apartment__rating">
								{stars.map((star, index) => {
									return (
										<img
											key={index}
											className="apartment__rating__star"
											src={index < rating ? redStar : greyStar}
											alt="star"
										/>
									);
								})}
							</div>
						</div>
					</div>
				</div>

				<div className="apartment__dropdown__wrapper">
					<div className="apartment__dropdown">
						<Dropdown titre="Description" texte={logement.description} />
					</div>
					<div className="apartment__dropdown">
						<Dropdown titre="Équipements" texte={logement.equipments} />
					</div>
				</div>
			</div>
		</main>
	);
};

export default Apartment;
