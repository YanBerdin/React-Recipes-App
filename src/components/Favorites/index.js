import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Content from 'src/components/Content';

function Favorites() {
  const favorites = useSelector((state) => state.user.favorites);
  const logged = useSelector((state) => state.user.logged);
  const navigate = useNavigate();

  useEffect(() => {
    if (!logged) {
      alert('Vous devez être connecté pour accéder à vos recettes préférées');
      navigate('/');
    }
  }, [logged, navigate]);

  return (

    <Page>
      <AppHeader />
      <Content
        title="Mes recettes préférées"
        text="Lorem ipsum dolor sit amet."
        recipes={favorites}
      />
    </Page>
  );
}

export default Favorites;
