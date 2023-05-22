import { useSelector } from 'react-redux';

import './style.scss';

const Menu = () => {
  const recipes = useSelector((state) => state.recipes);
  return (
    <nav className="menu">
      <a
        className="menu-link menu-link--active"
        href="/"
      >
        Accueil
      </a>
      {recipes.map((recipe) => (
        <a
          key={recipe.id}
          className="menu-link"
          href={`/recipe/${recipe.slug}`}
        >
          {recipe.title}
        </a>
      ))}
    </nav>
  );
};

export default Menu;
