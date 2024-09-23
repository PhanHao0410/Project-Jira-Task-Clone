import { useContext } from 'react';
import { rooStoreContext } from '.';

// if (process.env.NODE_ENV === 'development') {
//   const { enableLogging } = require('mobx-logger');
//   enableLogging();
// }
export const useStoreMobx = () => useContext(rooStoreContext);
