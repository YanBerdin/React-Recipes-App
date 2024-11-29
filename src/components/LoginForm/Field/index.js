// == Import : npm
import PropTypes from "prop-types";

// == Import : local
import "./style.scss";

// == Composant
const Field = ({
  value,
  type,
  name,
  placeholder,
  onChange,
  autoComplete,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  const inputId = `field-${name}`;

  return (
    <div className={value.length > 0 ? "field field--has-content" : "field"}>
      <input
        // React - state
        value={value}
        onChange={handleChange}
        // infos de base
        id={inputId}
        type={type}
        className="field-input"
        placeholder={placeholder}
        name={name}
        autoComplete={autoComplete}
      />

      <label htmlFor={inputId} className="field-label">
        {placeholder}
      </label>
    </div>
  );
};

Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  autoComplete: PropTypes.string,
};

//? Support for defaultProps will be removed from function components in a future major release.
//? Use JavaScript default parameters instead
// Valeurs par défaut pour les props
// Field.defaultProps = {
//  value: "",
//  type: "text",
// };

// == Export
export default Field;
