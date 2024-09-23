/* eslint-disable global-require */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'mobx-react';
import Theme from './themes';
import GlobalStyles from './themes/GlobalStyles';
import history from './utils/history';
import GlobalContainer from './containers/Global';
import App from './App';
import { rooStoreContext } from './mobx/index';
import 'react-toastify/dist/ReactToastify.css';
import { RootStore } from './mobx/rootStore';
import { CountStore } from './JiraComponent/LogIn/CountStore';

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
        <StoreContext.Provider value={RootStore}>
          <Theme>
            <GlobalStyles />
            <AppContainer />
          </Theme>
        </StoreContext.Provider>
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
