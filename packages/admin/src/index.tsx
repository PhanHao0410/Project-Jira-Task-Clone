/* eslint-disable global-require */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'mobx-react';
import Theme from './themes';
import GlobalStyles from './themes/GlobalStyles';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import { RootStore } from './mobx/rootStore';

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

const root = ReactDOM.createRoot(document.getElementById('root-admin'));
const StoreContext = React.createContext(null);
root.render(
  <React.Suspense fallback={loading()}>
    <Provider {...RootStore}>
      <Theme>
        <GlobalStyles />
        <App />
      </Theme>
    </Provider>
  </React.Suspense>,
  // <React.Suspense fallback={loading()}>
  //   <StoreContext.Provider value={TaskStore}>
  //     <ConnectedRouter history={history}>
  //       <Theme>
  //         <GlobalStyles />
  //         <GlobalContainer />
  //         <App />
  //       </Theme>
  //     </ConnectedRouter>
  //   </StoreContext.Provider>
  // </React.Suspense>,
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const AppContainer = require('./App').default;
    root.render(
      <React.Suspense fallback={loading()}>
        <Provider {...RootStore}>
          <Theme>
            <GlobalStyles />
            <App />
          </Theme>
        </Provider>
      </React.Suspense>,
      // <React.Suspense fallback={loading()}>
      //   <StoreContext.Provider value={TaskStore}>
      //     <ConnectedRouter history={history}>
      //       <Theme>
      //         <GlobalStyles />
      //         {/* <GlobalContainer /> */}
      //         <AppContainer />
      //       </Theme>
      //     </ConnectedRouter>
      //   </StoreContext.Provider>
      // </React.Suspense>,
    );
  });
}
