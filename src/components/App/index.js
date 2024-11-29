import PropTypes from "prop-types";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import Menu from "src/components/Menu";
import Home from "src/components/Home";
import Recipe from "src/components/Recipe";
import Error from "src/components/Error";
import Favorites from "src/components/Favorites";

import "./style.scss";

import { setRecipes } from "../../actions/recipes";

import Loading from "./Loading";

function App(props) {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.list);
  const favorites = useSelector((state) => state.user.favorites);
  const logged = useSelector((state) => state.user.logged);

  /*
  useEffect(() => {
    axios.get("http://localhost:3001/api/recipes").then((response) => {
      dispatch(setRecipes(response.data)); // dispatch de l’intention d’action
    });
  }, []);
*/

  // https://developer.mozilla.org/en-US/docs/Web/API/AbortController
  useEffect(() => {
    console.log("Effet exécuté"); //TODO: à supprimer
    const abortController = new AbortController();
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/recipes", {
          signal: abortController.signal, // Passer le signal d'abandon à la requête
        });
        dispatch(setRecipes(response.data)); // dispatch de l’intention d’action
      } catch (error) {
        console.error("Erreur de récupération des recettes", error);
      }
    };
    fetchRecipes();
    // Cleanup
    return () => {
      abortController.abort();
      console.log("Cleanup exécutée"); //TODO: à supprimer
    };
  }, []);

  if (recipes.length === 0) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/favorites" element={<Favorites />} />

        <Route path="/recipe/:slug" element={<Recipe />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

App.propTypes = {
  loading: PropTypes.bool,
};

//? Support for defaultProps will be removed from function components in a future major release.
//? Use JavaScript default parameters instead
// App.defaultProps = {
// loading: false,
// };

export default App;
