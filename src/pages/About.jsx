import HomeBanner from "../components/HomeBanner";
import montagne from "../assets/montagne.png";
import montagneMob from "../assets/montagne_mob.png";
import Dropdown from "../components/Dropdown";
import "../styles/About.css";

//? On crée un tableau d'objets qui contient les informations de chaque section
const aboutData = [
	{
		title: "Fiabilité",
		text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
	},
	{
		title: "Respect",
		text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
	},
	{
		title: "Service",
		text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
	},
	{
		title: "Sécurité",
		text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
	},
];

//? on affiche le composant HomeBanner avec les images en background et on map sur le tableau d'objets pour afficher les sections
const About = () => {
	return (
		<main className="main">
			
			<HomeBanner image={montagne} imagemob={montagneMob}></HomeBanner>
			<div className="about">
			{aboutData.map(({ title, text }) => (
				<Dropdown key={`about-${title}`} titre={title} texte={[text]} />
			))}{" "}
		</div>
		</main>
	);
};

export default About;
