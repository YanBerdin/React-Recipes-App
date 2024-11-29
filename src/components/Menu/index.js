import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.scss";

const Menu = () => {
  const recipes = useSelector((state) => state.recipes.list);
  return (
    <nav className="menu">
      <NavLink
        className={({ isActive }) =>
          isActive ? "menu-link menu-link--active" : "menu-link"
        }
        to="/"
      >
        Accueil
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "menu-link menu-link--active" : "menu-link"
        }
        to="/favorites"
      >
        Mes recettes préférées
      </NavLink>

      {recipes.map((recipe) => (
        <NavLink
          key={recipe.id}
          className={({ isActive }) =>
            isActive ? "menu-link menu-link--active" : "menu-link"
          }
          to={`/recipe/${recipe.slug}`}
        >
          {recipe.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default Menu;
