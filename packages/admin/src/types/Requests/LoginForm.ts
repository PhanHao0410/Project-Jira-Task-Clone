export interface LoginForm {
  email: string;
  password: string;
}

export interface SignUpForm {
  email: string;
  name: string;
  password: string;
  phoneNumber: string;
}

export interface ProjectIdForm {
  projectId: string;
}

export interface CreateProjectForm {
  categoryId: number;
  description: string;
  projectName: string;
}

export type Status = 'backlog' | 'selected' | 'progress' | 'done';
export type Priority = 'high' | 'medium' | 'low' | 'lowest';
export interface Data {
  id: number;
  content: string;
  status: Status;
  priority: Priority;
}
