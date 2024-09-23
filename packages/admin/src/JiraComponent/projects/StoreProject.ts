import { makeObservable, observable, computed, action, toJS } from 'mobx';
import { IRootStore } from '../../mobx/rootStore';
import { LoginForm } from '../../types/Requests';
import { ACCESS_TOKEN, LOGIN_INFO } from '../../constants/localStorage';
import AuthenticationService from '../../services/AuthenticationService';

export class ProjectStore {
  projectData: any = [];

  isLoading: boolean;

  errordata: string = '';

  deleteProjectData: any = {};

  deleteError: string = '';

  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      projectData: observable,
      deleteProjectData: observable,
      isLoading: observable,
      errordata: observable,
      deleteError: observable,
      fetchAllProjects: action,
      fetchDeleteProjects: action,
      setResetGetProjectState: action,
      setResetDeleteProjectState: action,
      getDataProjects: computed,
      getIsLoading: computed,
      getErrorData: computed,
      getDeleteProjectData: computed,
      getDeleteErrorData: computed,
    });
    this.rootStore = rootStore;
  }

  fetchAllProjects = async (keyUrl) => {
    try {
      this.isLoading = true;
      this.errordata = '';
      const response = await AuthenticationService.getAllProjects(keyUrl);
      if (response.status === 200) {
        this.isLoading = false;
        this.projectData = toJS(response.data.content);
        this.errordata = '';
      }
    } catch (e) {
      this.isLoading = false;
      this.errordata = e.response.data.message;
    }
  };

  fetchDeleteProjects = async (projectId) => {
    try {
      this.isLoading = true;
      this.deleteError = '';
      const response = await AuthenticationService.deleteProjects(projectId);
      if (response.status === 200) {
        this.isLoading = false;
        this.deleteProjectData = toJS(response.data.content);
        this.deleteError = '';
      }
    } catch (e) {
      this.isLoading = false;
      this.deleteError = e.response.data.content;
    }
  };

  setResetGetProjectState() {
    this.isLoading = false;
    this.projectData = [];
    this.errordata = '';
  }

  setResetDeleteProjectState() {
    this.isLoading = false;
    this.deleteProjectData = {};
    this.deleteError = '';
  }

  get getDataProjects() {
    return toJS(this.projectData);
  }

  get getIsLoading() {
    return this.isLoading;
  }

  get getErrorData() {
    return this.errordata;
  }

  get getDeleteProjectData() {
    return toJS(this.deleteProjectData);
  }

  get getDeleteErrorData() {
    return this.deleteError;
  }
}
