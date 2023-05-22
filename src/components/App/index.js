import PropTypes from "prop-types";

import Menu from "src/components/Menu";
import Home from "src/components/Home";
import Recipe from "src/components/Recipe";
import Error from "src/components/Error";

import Loading from "./Loading";

import "./style.scss";
import { Routes, Route } from "react-router-dom";

function App(props) {
  if (props.loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu />

      <Routes>
        {/* <Home /> */}
        <Route path="/" element={<Home />} />

        {/* <Recipe /> */}
        <Route path="/recipe/:name" element={<Recipe />} />

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
