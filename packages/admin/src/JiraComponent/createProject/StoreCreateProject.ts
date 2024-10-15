import { makeObservable, observable, computed, action, toJS } from 'mobx';
import { IRootStore } from '../../mobx/rootStore';
import { LoginForm } from '../../types/Requests';
import { ACCESS_TOKEN, LOGIN_INFO } from '../../constants/localStorage';
import AuthenticationService from '../../services/AuthenticationService';

export class CreateProjectStore {
  createProjectData: any = {};

  assignUserProjectData: any = {};

  userByProjectData: any = [];

  removeUserFromProjectData: any = {};

  isLoading: boolean;

  isLoadingCreate: boolean = false;

  errorCreatProject: string = '';

  errorAssignUserProject: string = '';

  errorUserByProjectId: string = '';

  errorRemoveUser: string = '';

  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      createProjectData: observable,
      assignUserProjectData: observable,
      userByProjectData: observable,
      isLoading: observable,
      isLoadingCreate: observable,
      errorCreatProject: observable,
      errorAssignUserProject: observable,
      removeUserFromProjectData: observable,
      errorUserByProjectId: observable,
      errorRemoveUser: observable,
      fetchCreateProject: action,
      fetchAssignUserProjects: action,
      fetchUserByProjectId: action,
      setResetCreateProjectState: action,
      setResetUserByProjectId: action,
      setResetAssignUserState: action,
      setResetRemoveUser: action,
      getDataCreateProjects: computed,
      getAssignUserProjectData: computed,
      getIsLoadingCreateProject: computed,
      getErrorData: computed,
      getErrorAssignUserForProject: computed,
      getDataRemoveUserFromProject: computed,
      getErrorUserByProjectId: computed,
      getErrorRemoveUserFromProject: computed,
    });
    this.rootStore = rootStore;
  }

  fetchCreateProject = async (dataPass) => {
    try {
      this.isLoadingCreate = true;
      this.errorCreatProject = '';
      const response = await AuthenticationService.createProject(dataPass);
      if (response.status === 200) {
        this.isLoadingCreate = false;
        this.createProjectData = toJS(response.data.content);
        this.errorCreatProject = '';
      }
    } catch (e) {
      this.isLoadingCreate = false;
      this.errorCreatProject = e.response.data.content;
    }
  };

  fetchAssignUserProjects = async (data) => {
    try {
      this.isLoading = true;
      this.errorAssignUserProject = '';
      const response = await AuthenticationService.assignUserProjects(data);
      if (response.status === 200) {
        this.isLoading = false;
        this.assignUserProjectData = toJS(response.data.content);
        this.errorAssignUserProject = '';
      }
    } catch (e) {
      this.isLoading = false;
      this.errorAssignUserProject = e.response.data.content;
    }
  };

  fetchUserByProjectId = async (data) => {
    try {
      this.isLoading = true;
      this.errorUserByProjectId = '';
      const response = await AuthenticationService.getUserByProjectId(data);
      if (response.status === 200) {
        this.isLoading = false;
        this.userByProjectData = toJS(response.data.content);
      }
    } catch (e) {
      this.isLoading = false;
      this.userByProjectData = [];
      this.errorUserByProjectId = e.response.data.content;
    }
  };

  fetchRemoveUserFromProject = async (data) => {
    try {
      this.isLoading = true;
      this.errorRemoveUser = '';
      const response = await AuthenticationService.removeUserFromProject(data);
      if (response.status === 200) {
        this.isLoading = false;
        this.removeUserFromProjectData = toJS(response.data);
        this.errorRemoveUser = '';
      }
    } catch (e) {
      this.isLoading = false;
      this.errorRemoveUser = e.response.data.content;
    }
  };

  setResetCreateProjectState() {
    this.isLoadingCreate = false;
    this.createProjectData = {};
    this.errorCreatProject = '';
  }

  setResetAssignUserState() {
    this.isLoading = false;
    this.assignUserProjectData = {};
    this.errorAssignUserProject = '';
  }

  setResetUserByProjectId() {
    this.isLoading = false;
    this.userByProjectData = [];
    this.errorUserByProjectId = '';
  }

  setResetRemoveUser() {
    this.isLoading = false;
    this.removeUserFromProjectData = {};
    this.errorRemoveUser = '';
  }

  get getDataCreateProjects() {
    return toJS(this.createProjectData);
  }

  get getAssignUserProjectData() {
    return toJS(this.assignUserProjectData);
  }

  get getDataUserByProjectId() {
    return toJS(this.userByProjectData);
  }

  get getIsLoadingCreateProject() {
    return this.isLoadingCreate;
  }

  get getErrorData() {
    return this.errorCreatProject;
  }

  get getErrorAssignUserForProject() {
    return this.errorAssignUserProject;
  }

  get getDataRemoveUserFromProject() {
    return toJS(this.removeUserFromProjectData);
  }

  get getErrorUserByProjectId() {
    return this.errorUserByProjectId;
  }

  get getErrorRemoveUserFromProject() {
    return this.errorRemoveUser;
  }
}
