import "../styles/Tag.css";

//? Affichage des tags pour les appartements
const Tag = ({ tag }) => {
    return (
        <div className="tag">
        <p className="tag__text">{tag}</p>
        </div>
    );
    }

export default Tag;
