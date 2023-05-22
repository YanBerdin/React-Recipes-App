import PropTypes from 'prop-types';

import './style.scss';

const Card = ({
  thumbnail,
  title,
  level,
  slug,
}) => (
  <article className="card">
    <img className="card-img" src={thumbnail} alt={title} />
    <div className="card-content">
      <h2 className="card-title">{title}</h2>
      <p className="card-desc">Difficulté : {level}</p>
      <a href={`/recipe/${slug}`} className="card-link">Voir la recette</a>
    </div>
  </article>
);

Card.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default Card;
