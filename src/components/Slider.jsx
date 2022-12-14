import "../styles/Slider.css";
import { useState } from "react";

const Slider = ({ images }) => {
	//?On initialise la pagination à 0 pour afficher la première image du tableau d'images
	const [pagination, setPagination] = useState(0);

	//?Si la pagination est inférieur à la longueur du tableau d'images, on incrémente de 1 sinon on remet à 0
	const nextPagination = () => {
		//! images.length -1 car le tableau commence à 0
		if (pagination < images.length - 1) {
			setPagination(pagination + 1);
		} else {
			setPagination(0);
		}
	};

	//?Si la pagination est supérieur à 0, on décrémente de 1 sinon on remet à la longueur du tableau d'images
	const prevPagination = () => {
		if (pagination > 0) {
			setPagination(pagination - 1);
		} else {
			//! images.length -1 car le tableau commence à 0 et on veut afficher la dernière image du tableau
			setPagination(images.length - 1);
		}
	};

	//?On affiche les flèches de navigation que si le tableau d'images contient plus d'une image
	const arrowShow = () => {
		if (images.length > 1) {
			return (
				<div>
					<i
						onClick={prevPagination}
						className="slider__arrow fas fa-chevron-up"
					></i>
					<i
						onClick={nextPagination}
						className="slider__arrow right fas fa-chevron-up"
					></i>
				</div>
			);
		}
	};

	return (
		<div className="slider">
			<div className="slider__container">
				{arrowShow()}

				<img className="slider__img" src={images[pagination]} alt="" />
				<div className="slider__count">
					{pagination + 1}/{images.length}
				</div>
			</div>
		</div>
	);
};

export default Slider;
