import { LoginStore } from '../JiraComponent/LogIn/StoreLogin';
import { SignUpStore } from '../JiraComponent/SignUp/StoreSignUp';
import { ProjectStore } from '../JiraComponent/projects/StoreProject';
import { UserStore } from '../JiraComponent/users/StoreUsers';
import { CreateProjectStore } from '../JiraComponent/createProject/StoreCreateProject';

export interface IRootStore {
  logInStore: LoginStore;
  signUpStore: SignUpStore;
  projectsStore: ProjectStore;
  userStore: UserStore;
  createProjectStore: CreateProjectStore;
}

export class RootStore implements IRootStore {
  logInStore: LoginStore;

  signUpStore: SignUpStore;

  projectsStore: ProjectStore;

  userStore: UserStore;

  createProjectStore: CreateProjectStore;

  constructor() {
    this.logInStore = new LoginStore(this);
    this.signUpStore = new SignUpStore(this);
    this.projectsStore = new ProjectStore(this);
    this.userStore = new UserStore(this);
    this.createProjectStore = new CreateProjectStore(this);
  }
}
