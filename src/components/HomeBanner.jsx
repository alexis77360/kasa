import montagne from "../assets/montagne.png";
import "../styles/HomeBanner.css";

const HomeBanner = () => {
	return (
		<div className="homeBanner">
			<img src={montagne} alt="Décors de falaises" className="homeBanner__img" />
			<div className="homeBanner__overlay"></div>
			<h2 className="homeBanner__title">Chez vous, partout et ailleurs</h2>
		</div>
	);
};

export default HomeBanner;
