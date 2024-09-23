import { makeObservable, observable, computed, action, toJS } from 'mobx';
import { IRootStore } from '../../mobx/rootStore';
import { LoginForm } from '../../types/Requests';
import { ACCESS_TOKEN, LOGIN_INFO } from '../../constants/localStorage';
import AuthenticationService from '../../services/AuthenticationService';

export class CreateProjectStore {
  createProjectData: any = {};

  isLoading: boolean;

  errorCreatProject: string = '';

  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      createProjectData: observable,
      isLoading: observable,
      errorCreatProject: observable,
      fetchCreateProject: action,
      setResetCreateProjectState: action,
      getDataProjects: computed,
      getIsLoading: computed,
      getErrorData: computed,
    });
    this.rootStore = rootStore;
  }

  fetchCreateProject = async (dataPass) => {
    try {
      console.log('check data pass at store: ', dataPass);
      this.isLoading = true;
      this.errorCreatProject = '';
      const response = await AuthenticationService.createProject(dataPass);
      console.log('check response: ', response);
      if (response.status === 200) {
        this.isLoading = false;
        // this.createProjectData = toJS(response.data.content);
        // this.errorCreatProject = '';
      }
    } catch (e) {
      console.log('check error: ', e.response);
      this.isLoading = false;
      // this.errorCreatProject = e.response.data.message;
    }
  };

  setResetCreateProjectState() {
    this.isLoading = false;
    this.createProjectData = {};
    this.errorCreatProject = '';
  }

  get getDataProjects() {
    return toJS(this.createProjectData);
  }

  get getIsLoading() {
    return this.isLoading;
  }

  get getErrorData() {
    return this.errorCreatProject;
  }
}
