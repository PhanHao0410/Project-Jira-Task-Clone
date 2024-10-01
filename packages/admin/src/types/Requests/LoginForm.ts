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

export interface AssignUserForm {
  projectId: number;
  userId: number;
}

export type Status = '1' | '2' | '3' | '4';
export type Priority = 'High' | 'Medium' | 'Low' | 'Lowest';

export interface PriorityType {
  priority: Priority;
  priorityId: number;
}
export interface Data {
  taskId: number;
  taskName: string;
  status: Status;
  priorityTask: PriorityType;
}
