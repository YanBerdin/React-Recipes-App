// == Import : npm
import PropTypes from 'prop-types';

// == Import : local
import './style.scss';

// == Composant
function Ingredients({ list }) {
  return (
    <ul className="ingredients">
      {list.map((ingredient) => (
        <li className="ingredient" key={ingredient.id}>
          <span className="ingredient-quantity">
            {ingredient.quantity} {ingredient.unit}
          </span> {ingredient.name}
        </li>
      ))}
    </ul>
  );
}

Ingredients.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      unit: PropTypes.string,
      quantity: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
    }).isRequired,
  ).isRequired,
};

// == Export
export default Ingredients;
