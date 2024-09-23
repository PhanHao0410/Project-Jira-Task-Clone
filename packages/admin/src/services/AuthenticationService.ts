import { AxiosResponse } from 'axios';
import BaseService from './BaseService';
import {
  LoginForm,
  SignUpForm,
  ProjectIdForm,
  CreateProjectForm,
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

// const createProject = (dataCreatProject,
// ): Promise<AxiosResponse<UserResponse>> => {
//   return BaseService.post(
//     `${BASE_URL}/Project/createProjectAuthorize`,
//     dataCreatProject,
//   );
// };

const createProject = (data: CreateProjectForm): Promise<AxiosResponse> => {
  return BaseService.post(`${BASE_URL}/Project/createProjectAuthorize`, data);
};

export default {
  SignIn,
  SignUp,
  getAllProjects,
  getAllUsers,
  deleteProjects,
  createProject,
};
