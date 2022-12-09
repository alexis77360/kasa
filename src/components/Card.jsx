import "../styles/Cards.css"


//? Affichage des cards pour les appartements grace aux props du parent Gallery 
const Cards = ({ image, title }) => {
  return (
    <div className="gallery">
      <img src={image} alt="" className="gallery__img" />
      <div className="gallery__overlay"></div>
      <h2 className="gallery__title">{title}</h2>
    </div>
  );
};

export default Cards;