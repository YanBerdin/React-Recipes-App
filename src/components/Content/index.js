import PropTypes from "prop-types";
import Card from "src/components/Card";
import "./style.scss";

function Content({ title, text, recipes, favoritesRecipes = [] }) {
  console.log("favoritesRecipes", favoritesRecipes);
  return (
    <section className="content">
      <h1 className="content-title">{title}</h1>
      <p className="content-text">{text}</p>
      {recipes && (
        <div className="content-list">
          {recipes.map((recipe) => (
            <Card key={recipe.id} {...recipe} />
          ))}
        </div>
      )}
      {favoritesRecipes && favoritesRecipes.length > 0 && (
        <div className="content-list">
          {favoritesRecipes.map((favoritesRecipe) => (
            <Card key={favoritesRecipe.id} {...favoritesRecipe} />
          ))}
        </div>
      )}
    </section>
  );
}

Content.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  favoritesRecipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

//Content.defaultProps = {
// recipes: null,
// };

export default Content;
