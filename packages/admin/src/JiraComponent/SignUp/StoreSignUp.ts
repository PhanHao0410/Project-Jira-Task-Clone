import { makeObservable, observable, computed, action, toJS } from 'mobx';
import { IRootStore } from '../../mobx/rootStore';
import { SignUpForm } from '../../types/Requests';
import AuthenticationService from '../../services/AuthenticationService';

export class SignUpStore {
  signUpData: any = {};

  isLoading: boolean;

  errordata: string;

  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      signUpData: observable,
      isLoading: observable,
      errordata: observable,
      fetchSignUp: action,
      getDataSignUp: computed,
      getIsLoading: computed,
      getErrorData: computed,
      setResetState: action,
    });
    this.rootStore = rootStore;
  }

  fetchSignUp = async (action: SignUpForm) => {
    try {
      this.isLoading = true;
      this.errordata = '';
      const response = await AuthenticationService.SignUp(action);
      if (response.status === 200) {
        this.isLoading = false;
        this.signUpData = toJS(response.data);
        this.errordata = '';
      }
    } catch (e) {
      this.isLoading = false;
      this.errordata = e.response.data.message;
    }
  };

  setResetState() {
    this.isLoading = false;
    this.signUpData = [];
    this.errordata = '';
  }

  get getDataSignUp() {
    return toJS(this.signUpData);
  }

  get getIsLoading() {
    return this.isLoading;
  }

  get getErrorData() {
    return this.errordata;
  }
}
