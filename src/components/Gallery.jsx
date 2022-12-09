import appartList from "../datas/data.json";
import Card from "./Card";
import "../styles/Gallery.css";

//? Affichage de la liste des appartements en utilisant la fonction map on affiche les cards et pour chaque card on utilise les props du parent Gallery
const Gallery = () => {
	return (
		<section className="home__gallery">
			{appartList.map((appart) => {
				return (
					<article key={appart.id}>
						<Card image={appart.cover} title={appart.title} />
					</article>
				);
			})}
		</section>
	);
};



export default Gallery;
