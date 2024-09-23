import { makeObservable, observable, computed, action, toJS } from 'mobx';
import { IRootStore } from '../../mobx/rootStore';
import AuthenticationService from '../../services/AuthenticationService';

export class UserStore {
  userData: any = [];

  isLoading: boolean;

  errordata: string = '';

  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      userData: observable,
      isLoading: observable,
      errordata: observable,
      fetchAllUsers: action,
      getDataUsers: computed,
      getIsLoading: computed,
      getErrorData: computed,
      setResetState: action,
    });
    this.rootStore = rootStore;
  }

  fetchAllUsers = async () => {
    try {
      this.isLoading = true;
      this.errordata = '';
      const response = await AuthenticationService.getAllUsers();
      if (response.status === 200) {
        this.isLoading = false;
        this.userData = toJS(response.data.content);
        this.errordata = '';
      }
    } catch (e) {
      this.isLoading = false;
      this.errordata = e.response.data.message;
    }
  };

  setResetState() {
    this.isLoading = false;
    this.userData = [];
    this.errordata = '';
  }

  get getDataUsers() {
    return toJS(this.userData);
  }

  get getIsLoading() {
    return this.isLoading;
  }

  get getErrorData() {
    return this.errordata;
  }
}
