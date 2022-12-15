import "../styles/HomeBanner.css";

//? Props: image (image de fond), imagemob (image de fond pour mobile), texte (texte à afficher)
const HomeBanner = ({image,imagemob,texte}) => {
	return (
		<div className="homeBanner">
			<img src={image} alt="Décor naturel" className="homeBanner__img" />
			<img src={imagemob} alt="Décor naturel" className="homeBannerMob__img" />
			<div className="homeBanner__overlay"></div>
			<h2 className="homeBanner__title">{texte}</h2>
		</div>
	);
};

export default HomeBanner;
