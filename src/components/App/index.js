import PropTypes from "prop-types";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Menu from "src/components/Menu";
import Home from "src/components/Home";
import Recipe from "src/components/Recipe";
import Error from "src/components/Error";

import "./style.scss";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setRecipes } from "../../actions/recipes";
import Loading from "./Loading";

function App(props) {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.list);

  useEffect(() => {
    axios.get("http://localhost:3001/api/recipes").then((response) => {
      dispatch(setRecipes(response.data)); // dispatch de l’intention d’action
    });
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
