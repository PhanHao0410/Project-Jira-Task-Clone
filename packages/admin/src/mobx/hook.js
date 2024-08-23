import { createContext, useContext } from 'react';
import { useLocalObservable } from 'mobx-react';
import store from '../JiraComponent/LogIn/taskStore';

const StoreContext = createContext(null);

export const useTodoStore = () => useContext(StoreContext);
