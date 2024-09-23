import { makeObservable, observable, computed, action, toJS } from 'mobx';
import { IRootStore } from '../../mobx/rootStore';
import { LoginForm } from '../../types/Requests';
import { ACCESS_TOKEN, LOGIN_INFO } from '../../constants/localStorage';
import AuthenticationService from '../../services/AuthenticationService';

export class LoginStore {
  LoginData: any = {};

  isLoading: boolean;

  errordata: string = '';

  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      LoginData: observable,
      isLoading: observable,
      errordata: observable,
      fetchLogin: action,
      getLoginData: computed,
      getIsLoading: computed,
      getErrorData: computed,
      setResetState: action,
    });
    this.rootStore = rootStore;
  }

  fetchLogin = async (action: LoginForm) => {
    try {
      this.isLoading = true;
      this.errordata = '';
      const response = await AuthenticationService.SignIn(action);
      if (response.status === 200) {
        this.isLoading = false;
        this.LoginData = toJS(response.data);
        this.errordata = '';
        localStorage.setItem(ACCESS_TOKEN, response.data.content.accessToken);
        localStorage.setItem(LOGIN_INFO, JSON.stringify(response.data.content));
      }
    } catch (e) {
      this.isLoading = false;
      this.errordata = e.response.data.message;
    }
  };

  setResetState() {
    this.isLoading = false;
    this.LoginData = {};
    this.errordata = '';
  }

  get getLoginData() {
    return toJS(this.LoginData);
  }

  get getIsLoading() {
    return this.isLoading;
  }

  get getErrorData() {
    return this.errordata;
  }
}
