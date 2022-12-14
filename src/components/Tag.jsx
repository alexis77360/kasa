import "../styles/Tag.css";

const Tag = ({ tag }) => {
    return (
        <div className="tag">
        <p className="tag__text">{tag}</p>
        </div>
    );
    }


export default Tag;
