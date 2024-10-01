import { makeObservable, observable, computed, action, toJS } from 'mobx';
import { IRootStore } from '../../mobx/rootStore';
import AuthenticationService from '../../services/AuthenticationService';

export class UserStore {
  userData: any = [];

  deleteUserData: any = {};

  editUserData: any = {};

  isLoading: boolean;

  errordata: string = '';

  errorDeleteUser: string = '';

  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      userData: observable,
      isLoading: observable,
      errordata: observable,
      deleteUserData: observable,
      errorDeleteUser: observable,
      editUserData: observable,
      fetchAllUsers: action,
      fetchDeleteUser: action,
      fetchEditUser: action,
      getDataUsers: computed,
      getIsLoading: computed,
      getErrorData: computed,
      getDataDeleteUser: computed,
      getErrorDeleteUser: computed,
      getDataEditUser: computed,
      setResetState: action,
      ResetStateEditUser: action,
      setResetStateDeleteUser: action,
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

  fetchDeleteUser = async (userId) => {
    try {
      this.isLoading = true;
      this.deleteUserData = {};
      this.errorDeleteUser = '';
      const response = await AuthenticationService.deleteUser(userId);
      if (response.status === 200) {
        this.isLoading = false;
        this.deleteUserData = toJS(response.data);
      }
    } catch (e) {
      this.isLoading = false;
      this.deleteUserData = {};
      this.errorDeleteUser = e.response.data.content;
    }
  };

  fetchEditUser = async (action) => {
    try {
      this.isLoading = true;
      this.editUserData = {};
      const response = await AuthenticationService.editUser(action);
      if (response.status === 200) {
        this.isLoading = false;
        this.editUserData = toJS(response.data);
      }
    } catch (e) {
      this.isLoading = false;
      this.editUserData = {};
      console.log('check err edit: ', e.response);
    }
  };

  setResetState() {
    this.isLoading = false;
    this.userData = [];
    this.errordata = '';
  }

  ResetStateEditUser() {
    this.isLoading = false;
    this.editUserData = {};
  }

  setResetStateDeleteUser() {
    this.isLoading = false;
    this.errorDeleteUser = '';
    this.deleteUserData = {};
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

  get getDataDeleteUser() {
    return this.deleteUserData;
  }

  get getDataEditUser() {
    return toJS(this.editUserData);
  }

  get getErrorDeleteUser() {
    return this.errorDeleteUser;
  }
}
