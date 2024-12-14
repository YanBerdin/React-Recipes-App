import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import axios from "axios";
import api from "src/api";
import LoginForm from "src/components/LoginForm";

import "./style.scss";

import logo from "src/assets/logo.png";
import {
  changeLoginField,
  saveLoginSuccessful,
  setFavoritesRecipes,
} from "../../actions/user";

const AppHeader = () => {
  // Reducers combinés (un state avec des 'compartiments') => ne pas oublier le nom du 'compartiments'
  const emailValue = useSelector((state) => state.user.email);
  const passwordValue = useSelector((state) => state.user.password);
  const isLogged = useSelector((state) => state.user.isLogged);
  console.log(isLogged);
  const nickname = useSelector((state) => state.user.nickname);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  /*
  // aller récupérer les recettes préférées de l'utilisateur
  function fetchFavoriteRecipes(jwt) {
    axios
      .get(
        "http://localhost:3001/api/favorites",
        // options, notamment les headers
        // => on transmet le token JWT au serveur, pour autorisation
        {
          headers: {
            // nom du header: valeur
            Authorization: `Bearer ${jwt}`,
          },
        }
      )
      .then((response) => {
        console.log(response);

        // TODO pour stocker les recettes préférées dans le state :
        // - mettre en place une action
        // - prévoir un emplacement dans le state (au choix dans le tiroir recipes
        // ou le tiroir user)
        // (BONUS : ou alors on crée un nouveau tiroir, et un nouveau reducer)
        // - ici on dispatch l'action
      });
  }
*/

  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="Logo oRecipes" />
      <LoginForm
        email={emailValue}
        password={passwordValue}
        changeField={(newValue, identifier) => {
          // console.log(`changeField: newValue=${newValue}, identifier=${identifier}`);
          dispatch(changeLoginField(newValue, identifier));
        }}
        handleLogin={() => {
          console.log("handleLogin"); //TODO : à supprimer
          // on valide les infos auprès du back-end
          api
            .post("/login", {
              email: emailValue,
              password: passwordValue,
            })
            .then((response) => {
              if (response.status === 200) {
                console.log(emailValue, passwordValue); //TODO : à supprimer
                sessionStorage.setItem("token", response.data.token);
                sessionStorage.setItem("nickname", response.data.pseudo);
                console.log(nickname); //TODO : à supprimer
                /*
                if (response.data.token) {
                  sessionStorage.setItem("token", response.data.token);
                }
                */
                dispatch(
                  saveLoginSuccessful(response.data.pseudo, response.data.token)
                );
              } else {
                alert("Identifiants incorrects. Veuillez réessayer.");
              }
            })
            .catch((error) => {
              alert("Mauvais identifiants.");
              console.log(error);
            });
        }}
        handleLogout={() => {
          sessionStorage.removeItem("token");
          sessionStorage.removeItem("nickname");
          dispatch(saveLoginSuccessful("", null));
          navigate("/");
          console.log("handleLogout"); //TODO : à supprimer
        }}
        loggedMessage={`Bienvenue ${nickname}`}
        isLogged={isLogged}
      />
    </header>
  );
};

// TODO : quand on est connecté, compléter le message de bienvenue avec le prénom de l'utilisateur

export default AppHeader;
