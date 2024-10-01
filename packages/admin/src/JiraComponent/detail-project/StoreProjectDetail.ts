import { makeObservable, observable, computed, action, toJS } from 'mobx';
import { IRootStore } from '../../mobx/rootStore';
import AuthenticationService from '../../services/AuthenticationService';

export class ProjectDetail {
  dataDetailProject: any = {};

  isLoading: boolean;

  errorDetailProject: string = '';

  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      dataDetailProject: observable,
      isLoading: observable,
      errorDetailProject: observable,
      fetchProjectDetail: action,
      getDataProjectDetail: computed,
      getErrorDataProjectDetail: computed,
    });
    this.rootStore = rootStore;
  }

  fetchProjectDetail = async (action) => {
    try {
      this.isLoading = true;
      this.errorDetailProject = '';
      const response = await AuthenticationService.ProjectDetail(action);
      if (response.status === 200) {
        this.isLoading = false;
        this.dataDetailProject = toJS(response.data.content);
        this.errorDetailProject = '';
      }
    } catch (e) {
      this.isLoading = false;
      this.errorDetailProject = e.response.data.content;
      this.dataDetailProject = {};
    }
  };

  get getDataProjectDetail() {
    return toJS(this.dataDetailProject);
  }

  get getErrorDataProjectDetail() {
    return this.errorDetailProject;
  }
}
