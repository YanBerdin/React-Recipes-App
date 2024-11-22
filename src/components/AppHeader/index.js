/*
import "./style.scss";
import logo from "src/assets/logo.png";

const AppHeader = () => (
  <header className="header">
    <img src={logo} className="header-logo" alt="Logo oRecipes" />
  </header>
);

export default AppHeader;
*/

import { useSelector, useDispatch } from "react-redux";

import axios from "axios";

import LoginForm from "src/components/LoginForm";

import "./style.scss";

import logo from "src/assets/logo.png";
import { changeLoginField, saveLoginSuccessful } from "../../actions/user";

const AppHeader = () => {
  // on a des reducers combinés (un state avec des tiroirs) => ne pas oublier le nom du tiroir
  const emailValue = useSelector((state) => state.user.email);
  const passwordValue = useSelector((state) => state.user.password);
  const logged = useSelector((state) => state.user.logged);
  const nickname = useSelector((state) => state.user.nickname);

  const dispatch = useDispatch();

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
          axios
            .post("http://localhost:3001/api/login", {
              email: emailValue,
              password: passwordValue,
            })
            .then((response) => {
              dispatch(
                saveLoginSuccessful(response.data.pseudo, response.data.token)
              );

              fetchFavoriteRecipes(response.data.token);
            })
            .catch((error) => {
              alert("Mauvais identifiants");
              console.log(error);
            });
        }}
        handleLogout={() => {
          console.log("handleLogout");
        }}
        loggedMessage={`Bienvenue ${nickname}`}
        isLogged={logged}
      />
    </header>
  );
};

// TODO : quand on est connecté, compléter le message de bienvenue avec le prénom de l'utilisateur

export default AppHeader;
