import PropTypes from 'prop-types';

import './style.scss';
import { Link } from 'react-router-dom';

// Maintenant que le state est visible dans Redux Dev Tools
// on peut voir que la propriété level n'existe pas mais difficulty oui
function Card({
  thumbnail, title, difficulty, slug,
}) {
  return (
    <article className="card">
      <img className="card-img" src={thumbnail} alt={title} />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-desc">Difficulté : {difficulty}</p>
        {/* <a href={`/recipe/${slug}`} className="card-link">Voir la recette</a> */}
        <Link to={`/recipe/${slug}`} className="card-link">
          Voir la recette
        </Link>
      </div>
    </article>
  );
}

Card.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default Card;
