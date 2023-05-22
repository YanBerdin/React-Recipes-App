import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from 'src/components/App';
import store from 'src/store';

const rootReactElement = (
  <Provider store={store}>
    <App />
  </Provider>
);

const root = createRoot(document.getElementById('root'));
root.render(rootReactElement);
