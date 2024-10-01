import { makeObservable, observable, computed, action, toJS } from 'mobx';
import { IRootStore } from '../../mobx/rootStore';
import { LoginForm } from '../../types/Requests';
import { ACCESS_TOKEN, LOGIN_INFO } from '../../constants/localStorage';
import AuthenticationService from '../../services/AuthenticationService';

export class AppBarStore {
  DataStatus: any = [];

  DataTaskType: any = [];

  DataPriority: any = [];

  isLoading: boolean = false;

  errorStatus: string = '';

  errorPriority: string = '';

  errorTaskType: string = '';

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      DataStatus: observable,
      DataTaskType: observable,
      DataPriority: observable,
      isLoading: observable,
      errorStatus: observable,
      errorPriority: observable,
      errorTaskType: observable,
      fetchDataPriority: action,
      fetchDataStatus: action,
      fetchDataTaskType: action,
      getDataStatus: computed,
      getDataPriority: computed,
      getDataTaskType: computed,
    });
    this.rootStore = rootStore;
  }

  fetchDataStatus = async () => {
    try {
      this.isLoading = true;
      this.DataStatus = [];
      this.errorStatus = '';
      const response = await AuthenticationService.getAllStatus();
      if (response.status === 200) {
        this.isLoading = false;
        this.DataStatus = toJS(response.data.content);
        this.errorStatus = '';
      }
    } catch (e) {
      this.isLoading = false;
      this.DataStatus = [];
      this.errorStatus = e.response.data.content;
    }
  };

  fetchDataTaskType = async () => {
    try {
      this.isLoading = true;
      this.DataTaskType = [];
      this.errorTaskType = '';
      const response = await AuthenticationService.getAllTaskType();
      if (response.status === 200) {
        this.isLoading = false;
        this.DataTaskType = toJS(response.data.content);
        this.errorTaskType = '';
      }
    } catch (e) {
      this.isLoading = false;
      this.DataTaskType = [];
      this.errorTaskType = e.response.data.content;
    }
  };

  fetchDataPriority = async () => {
    try {
      this.isLoading = true;
      this.DataPriority = [];
      this.errorPriority = '';
      const response = await AuthenticationService.getAllPriority();
      if (response.status === 200) {
        this.isLoading = false;
        this.DataPriority = toJS(response.data.content);
        this.errorPriority = '';
      }
    } catch (e) {
      this.isLoading = false;
      this.DataPriority = [];
      this.errorPriority = e.response.data.content;
    }
  };

  get getDataStatus() {
    return toJS(this.DataStatus);
  }

  get getDataPriority() {
    return toJS(this.DataPriority);
  }

  get getDataTaskType() {
    return toJS(this.DataTaskType);
  }
}
