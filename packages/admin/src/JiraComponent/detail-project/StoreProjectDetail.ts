import { makeObservable, observable, computed, action, toJS } from 'mobx';
import { IRootStore } from '../../mobx/rootStore';
import AuthenticationService from '../../services/AuthenticationService';

export class ProjectDetail {
  dataDetailProject: any = {};

  dataUpdateStatus: any = {};

  dataTaskDetail: any = {};

  dataUpdateTask: any = {};

  dataUpdatePriority: any = {};

  dataUpdateEstimate: any = {};

  dataUpdateTimeTracking: any = {};

  dataCreateTask: any = {};

  dataDeleteTask: any = {};

  dataUpdateProject: any = {};

  isLoading: boolean;

  loadingStatus: boolean;

  errorDetailProject: string = '';

  errorUpdataStatus: string = '';

  errorTaskDetail: string = '';

  errorUpdateTask: any = {};

  errorUpdatePriority: any = {};

  errorUpdateEstimate: any = {};

  errorUpdateTimeTracking: any = {};

  errorCreateTask: any = {};

  errorDeleteTask: any = {};

  errorUpdateProject: any = {};

  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      dataDetailProject: observable,
      dataUpdateStatus: observable,
      dataTaskDetail: observable,
      dataUpdatePriority: observable,
      dataUpdateEstimate: observable,
      dataUpdateTimeTracking: observable,
      dataCreateTask: observable,
      dataDeleteTask: observable,
      dataUpdateProject: observable,
      isLoading: observable,
      loadingStatus: observable,
      errorDetailProject: observable,
      errorUpdataStatus: observable,
      errorTaskDetail: observable,
      dataUpdateTask: observable,
      errorUpdateTask: observable,
      errorUpdatePriority: observable,
      errorUpdateEstimate: observable,
      errorUpdateTimeTracking: observable,
      errorCreateTask: observable,
      errorDeleteTask: observable,
      errorUpdateProject: observable,
      fetchProjectDetail: action,
      fetchUpdateStatus: action,
      fetchTaskDetail: action,
      fetchUpdateTask: action,
      fetchUpdatePriority: action,
      fetchUpdateEstimate: action,
      fetchUpdateTimeTracking: action,
      fetchCreateTaskProject: action,
      fetchDeleteTaskProject: action,
      fetchUpdateProject: action,
      setResetStateTaskDetail: action,
      setResetStateUpdateTask: action,
      setResetStateUpdatePriority: action,
      setResetStateUpdateEstimate: action,
      setResetStateUpdateTimeTracking: action,
      setResetStateCreateTask: action,
      setResetStateDeleteTask: action,
      setResetStateUpdateProject: action,
      getDataProjectDetail: computed,
      getDataTaskDetail: computed,
      getDataUpdateTask: computed,
      getDataUpdatePriority: computed,
      getDataUpdateEstimate: computed,
      getDataUpdateTimeTracking: computed,
      getDataCreateTask: computed,
      getDataUpdateStatus: computed,
      getDataDeleteTask: computed,
      getDataUpdateProject: computed,
      getErrorDataProjectDetail: computed,
      errorUpdateStatus: computed,
      geterrorTaskDetail: computed,
      getErrorUpdateTask: computed,
      getErrorUpdatePriority: computed,
      getErrorUpdateEstimate: computed,
      getErrorUpdateTimeTracking: computed,
      getErrorCreateTask: computed,
      getErrorDeleteTask: computed,
      getErrorUpdateProject: computed,
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

  fetchUpdateStatus = async (action) => {
    try {
      this.loadingStatus = true;
      this.errorUpdataStatus = '';
      const response = await AuthenticationService.updateStatus(action);
      if (response.status === 200) {
        this.loadingStatus = false;
        this.dataUpdateStatus = toJS(response.data);
        this.errorUpdataStatus = '';
      }
    } catch (e) {
      this.loadingStatus = false;
      this.dataUpdateStatus = {};
      this.errorUpdataStatus = e.response.data.content;
    }
  };

  fetchTaskDetail = async (action) => {
    try {
      this.errorTaskDetail = '';
      const response = await AuthenticationService.getTaskDetail(action);
      if (response.status === 200) {
        this.dataTaskDetail = toJS(response.data.content);
        this.errorTaskDetail = '';
      }
    } catch (e) {
      this.errorTaskDetail = e.response.data.content;
    }
  };

  fetchUpdateTask = async (action) => {
    try {
      const response = await AuthenticationService.updateTask(action);
      if (response.status === 200) {
        this.dataUpdateTask = toJS(response.data);
      }
    } catch (e) {
      this.errorUpdateTask = toJS(e.response.data);
    }
  };

  fetchUpdatePriority = async (action) => {
    try {
      this.errorUpdatePriority = '';
      const response = await AuthenticationService.updatePriority(action);
      if (response.status === 200) {
        this.dataUpdatePriority = toJS(response.data);
      }
    } catch (e) {
      this.errorUpdatePriority = toJS(e.response.data);
    }
  };

  fetchUpdateEstimate = async (action) => {
    try {
      this.errorUpdateEstimate = '';
      const response = await AuthenticationService.updateEstimate(action);
      if (response.status === 200) {
        this.dataUpdateEstimate = toJS(response.data);
      }
    } catch (e) {
      this.dataUpdateEstimate = {};
      this.errorUpdateEstimate = toJS(e.response.data);
    }
  };

  fetchUpdateTimeTracking = async (action) => {
    try {
      this.errorUpdateTimeTracking = '';
      const response = await AuthenticationService.updateTimeTracking(action);
      if (response.status === 200) {
        this.dataUpdateTimeTracking = toJS(response.data);
      }
    } catch (e) {
      this.dataUpdateTimeTracking = {};
      this.errorUpdateTimeTracking = toJS(e.response.data);
    }
  };

  fetchCreateTaskProject = async (action) => {
    try {
      this.errorCreateTask = {};
      const response = await AuthenticationService.projectCreateTask(action);
      if (response.status === 200) {
        this.dataCreateTask = toJS(response.data);
      }
    } catch (e) {
      this.dataCreateTask = {};
      this.errorCreateTask = toJS(e.response.data);
    }
  };

  fetchDeleteTaskProject = async (action) => {
    try {
      this.errorDeleteTask = {};
      const response = await AuthenticationService.removeTaskProject(action);
      if (response.status === 200) {
        this.dataDeleteTask = toJS(response.data);
      }
    } catch (e) {
      this.dataDeleteTask = {};
      this.errorDeleteTask = toJS(e.response.data);
    }
  };

  fetchUpdateProject = async (action) => {
    try {
      this.errorUpdateProject = {};
      const response = await AuthenticationService.updateProject(action);
      if (response.status === 200) {
        this.dataUpdateProject = toJS(response.data);
      }
    } catch (e) {
      this.dataUpdateProject = {};
      this.errorUpdateProject = toJS(e.response.data);
    }
  };

  setResetStateTaskDetail() {
    this.dataTaskDetail = {};
    this.errorTaskDetail = '';
  }

  setResetStateUpdateTask() {
    this.dataUpdateTask = {};
    this.errorUpdateTask = {};
  }

  setResetStateUpdatePriority() {
    this.dataUpdatePriority = {};
    this.errorUpdatePriority = {};
  }

  setResetStateUpdateEstimate() {
    this.dataUpdateEstimate = {};
    this.errorUpdateEstimate = '';
  }

  setResetStateUpdateTimeTracking() {
    this.dataUpdateTimeTracking = {};
    this.errorUpdateTimeTracking = {};
  }

  setResetStateCreateTask() {
    this.dataCreateTask = {};
    this.errorCreateTask = {};
  }

  setResetStateDeleteTask() {
    this.dataDeleteTask = {};
    this.errorDeleteTask = {};
  }

  setResetStateUpdateProject() {
    this.dataUpdateProject = {};
    this.errorUpdateProject = {};
  }

  get getDataProjectDetail() {
    return toJS(this.dataDetailProject);
  }

  get getDataUpdateStatus() {
    return toJS(this.dataUpdateStatus);
  }

  get getDataTaskDetail() {
    return toJS(this.dataTaskDetail);
  }

  get getDataUpdateTask() {
    return toJS(this.dataUpdateTask);
  }

  get getDataUpdatePriority() {
    return toJS(this.dataUpdatePriority);
  }

  get getDataUpdateEstimate() {
    return toJS(this.dataUpdateEstimate);
  }

  get getDataUpdateTimeTracking() {
    return toJS(this.dataUpdateTimeTracking);
  }

  get getDataCreateTask() {
    return toJS(this.dataCreateTask);
  }

  get getDataDeleteTask() {
    return toJS(this.dataDeleteTask);
  }

  get getDataUpdateProject() {
    return toJS(this.dataUpdateProject);
  }

  get getErrorDataProjectDetail() {
    return this.errorDetailProject;
  }

  get errorUpdateStatus() {
    return this.errorUpdataStatus;
  }

  get geterrorTaskDetail() {
    return this.errorTaskDetail;
  }

  get getErrorUpdateTask() {
    return toJS(this.errorUpdateTask);
  }

  get getErrorUpdatePriority() {
    return toJS(this.errorUpdatePriority);
  }

  get getErrorUpdateEstimate() {
    return toJS(this.errorUpdateEstimate);
  }

  get getErrorUpdateTimeTracking() {
    return toJS(this.errorUpdateTimeTracking);
  }

  get getErrorCreateTask() {
    return toJS(this.errorCreateTask);
  }

  get getErrorDeleteTask() {
    return toJS(this.errorDeleteTask);
  }

  get getErrorUpdateProject() {
    return toJS(this.errorUpdateProject);
  }
}
