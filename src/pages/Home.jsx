import HomeBanner from "../components/HomeBanner";
import Gallery from "../components/Gallery";
import falaise from "../assets/falaise.png";
import falaiseMob from "../assets/falaise_mob.png";

//?? Texte du banner
const bannerText = "Chez vous, partout et ailleurs";

//?? Page d'accueil avec le banner et la galerie
const Home = () => {
	return (
		<main className="main">
			<HomeBanner image={falaise} imagemob={falaiseMob} texte={bannerText}>
			</HomeBanner>
			<Gallery></Gallery>
		</main>
	);
};

export default Home;
