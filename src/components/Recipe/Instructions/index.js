// Import NPM
import PropTypes from 'prop-types';

// Imports locaux
import './style.scss';

const Instructions = ({ steps }) => (
  <ol className="steps">
    {steps.map((instruction) => (
      <li key={instruction} className="step">
        {instruction}
      </li>
    ))}
  </ol>
);

// on valide nos props
Instructions.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

// Export composant
export default Instructions;
