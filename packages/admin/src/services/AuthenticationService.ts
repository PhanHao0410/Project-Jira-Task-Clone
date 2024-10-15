import { AxiosResponse } from 'axios';
import BaseService from './BaseService';
import {
  LoginForm,
  SignUpForm,
  ProjectIdForm,
  CreateProjectForm,
  AssignUserForm,
  UpdateStatusForm,
} from '../types/Requests';
import { UserResponse } from '../types/Responses';

const BASE_URL = 'https://jiranew.cybersoft.edu.vn/api';

const SignIn = (data: LoginForm): Promise<AxiosResponse> => {
  return BaseService.post(`${BASE_URL}/Users/signin`, data);
};

const SignUp = (data: SignUpForm): Promise<AxiosResponse<UserResponse>> => {
  return BaseService.post(`${BASE_URL}/Users/signup`, data);
};

const getAllProjects = (keySearch): Promise<AxiosResponse> => {
  return BaseService.get(`${BASE_URL}/Project/getAllProject${keySearch}`);
};

const deleteProjects = (projectId: ProjectIdForm): Promise<AxiosResponse> => {
  return BaseService.delete(
    `${BASE_URL}/Project/deleteProject?projectId=${projectId}`,
  );
};

const getAllUsers = (): Promise<AxiosResponse> => {
  return BaseService.get(`${BASE_URL}/Users/getUser`);
};

const createProject = (data: CreateProjectForm): Promise<AxiosResponse> => {
  return BaseService.post(`${BASE_URL}/Project/createProjectAuthorize`, data);
};

const assignUserProjects = (data: AssignUserForm): Promise<AxiosResponse> => {
  return BaseService.post(`${BASE_URL}/Project/assignUserProject`, data);
};

const getUserByProjectId = (projectId): Promise<AxiosResponse> => {
  return BaseService.get(
    `${BASE_URL}/Users/getUserByProjectId?idProject=${projectId}`,
  );
};

const removeUserFromProject = (
  data: AssignUserForm,
): Promise<AxiosResponse> => {
  return BaseService.post(`${BASE_URL}/Project/removeUserFromProject`, data);
};

const deleteUser = (data): Promise<AxiosResponse> => {
  return BaseService.delete(`${BASE_URL}/Users/deleteUser?id=${data}`);
};

const editUser = (data): Promise<AxiosResponse> => {
  return BaseService.put(`${BASE_URL}/Users/editUser`, data);
};

const getAllStatus = (): Promise<AxiosResponse> => {
  return BaseService.get(`${BASE_URL}/Status/getAll`);
};

const getAllTaskType = (): Promise<AxiosResponse> => {
  return BaseService.get(`${BASE_URL}/TaskType/getAll`);
};

const getAllPriority = (): Promise<AxiosResponse> => {
  return BaseService.get(`${BASE_URL}/Priority/getAll`);
};

const updatePriority = (data): Promise<AxiosResponse> => {
  return BaseService.put(`${BASE_URL}/Project/updatePriority`, data);
};

const ProjectDetail = (data): Promise<AxiosResponse> => {
  return BaseService.get(`${BASE_URL}/Project/getProjectDetail?id=${data}`);
};

const updateStatus = (data: UpdateStatusForm): Promise<AxiosResponse> => {
  return BaseService.put(`${BASE_URL}/Project/updateStatus`, data);
};

const getTaskDetail = (data): Promise<AxiosResponse> => {
  return BaseService.get(`${BASE_URL}/Project/getTaskDetail?taskId=${data}`);
};

const updateTask = (data): Promise<AxiosResponse> => {
  return BaseService.post(`${BASE_URL}/Project/updateTask`, data);
};

const updateEstimate = (data): Promise<AxiosResponse> => {
  return BaseService.put(`${BASE_URL}/Project/updateEstimate`, data);
};

const updateTimeTracking = (data): Promise<AxiosResponse> => {
  return BaseService.put(`${BASE_URL}/Project/updateTimeTracking`, data);
};

const projectCreateTask = (data): Promise<AxiosResponse> => {
  return BaseService.post(`${BASE_URL}/Project/createTask`, data);
};

const removeTaskProject = (data): Promise<AxiosResponse> => {
  return BaseService.delete(`${BASE_URL}/Project/removeTask?taskId=${data}`);
};

const updateProject = (data): Promise<AxiosResponse> => {
  return BaseService.put(
    `${BASE_URL}/Project/updateProject?projectId=${data.projectId}`,
    data.dataPayload,
  );
};

export default {
  SignIn,
  SignUp,
  getAllProjects,
  getAllUsers,
  deleteProjects,
  createProject,
  assignUserProjects,
  getUserByProjectId,
  removeUserFromProject,
  deleteUser,
  editUser,
  getAllStatus,
  getAllTaskType,
  getAllPriority,
  ProjectDetail,
  updateStatus,
  getTaskDetail,
  updateTask,
  updatePriority,
  updateEstimate,
  updateTimeTracking,
  projectCreateTask,
  removeTaskProject,
  updateProject,
};
