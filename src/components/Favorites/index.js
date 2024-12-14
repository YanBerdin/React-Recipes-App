import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import axios from "axios";
import api from "src/api";
import { useDispatch } from "react-redux";
import { setFavoritesRecipes } from "src/actions/user";

import Page from "src/components/Page";
import AppHeader from "src/components/AppHeader";
import Content from "src/components/Content";

function Favorites() {
  const favoritesRecipes = useSelector((state) => state.user.favoritesRecipes);

  const isLogged = useSelector((state) => state.user.isLogged);
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token); // JWT
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLogged) {
      alert("Vous devez être connecté pour accéder à vos recettes préférées");
      navigate("/");
    }
  }, [isLogged, navigate]);

  // https://developer.mozilla.org/en-US/docs/Web/API/AbortController
  useEffect(() => {
    if (isLogged) {
      console.log("Effet exécuté"); //TODO: à supprimer
      const abortController = new AbortController();
      const fetchFavoritesRecipes = async () => {
        try {
          const response = await api.get(
            "http://localhost:3001/api/favorites",
            {
              headers: {
                Authorization: `Bearer ${token}`, // JWT
              },
              signal: abortController.signal, // Passer le signal d'abandon à la requête
            }
          );
          console.log(response); //TODO: à supprimer
          dispatch(setFavoritesRecipes(response.data.favorites)); // dispatch de l’intention d’action
        } catch (error) {
          console.error("Erreur de récupération des recettes", error);
        }
      };
      fetchFavoritesRecipes();
      // Cleanup
      return () => {
        abortController.abort();
        console.log("Cleanup exécutée"); //TODO: à supprimer
      };
    }
  }, [isLogged, token, dispatch]);

  return (
    <Page>
      <AppHeader />
      <Content
        title="Mes recettes préférées"
        text="Lorem ipsum dolor sit amet."
        favoritesRecipes={favoritesRecipes}
      />
    </Page>
  );
}

export default Favorites;
