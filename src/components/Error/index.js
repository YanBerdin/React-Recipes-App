import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Content from 'src/components/Content';

function Error() {
  return (
    <Page>
      <AppHeader />
      <Content
        title="Erreur"
        text="Nous sommes désolé, Une erreur s'est produite."
      />
    </Page>
  );
}

export default Error;
