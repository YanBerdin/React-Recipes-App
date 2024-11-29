import PropTypes from "prop-types";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import Menu from "src/components/Menu";
import Home from "src/components/Home";
import Recipe from "src/components/Recipe";
import Error from "src/components/Error";

import "./style.scss";

import { setRecipes } from "../../actions/recipes";

import Loading from "./Loading";

function App(props) {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.list);

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
        {/* <Home /> */}
        <Route path="/" element={<Home />} />

        {/* <Recipe /> */}
        <Route path="/recipe/:slug" element={<Recipe />} />

        {/* <Error /> */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

App.propTypes = {
  loading: PropTypes.bool,
};

App.defaultProps = {
  loading: false,
};

export default App;
