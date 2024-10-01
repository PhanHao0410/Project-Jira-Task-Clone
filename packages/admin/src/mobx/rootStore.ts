import { LoginStore } from '../JiraComponent/LogIn/StoreLogin';
import { SignUpStore } from '../JiraComponent/SignUp/StoreSignUp';
import { ProjectStore } from '../JiraComponent/projects/StoreProject';
import { UserStore } from '../JiraComponent/users/StoreUsers';
import { CreateProjectStore } from '../JiraComponent/createProject/StoreCreateProject';
import { AppBarStore } from '../components/AppBar/StoreAppBar';
import { ProjectDetail } from '../JiraComponent/detail-project/StoreProjectDetail';

export interface IRootStore {
  logInStore: LoginStore;
  signUpStore: SignUpStore;
  projectsStore: ProjectStore;
  userStore: UserStore;
  createProjectStore: CreateProjectStore;
  appbarStore: AppBarStore;
  projectDetailStore: ProjectDetail;
}

export class RootStore implements IRootStore {
  logInStore: LoginStore;

  signUpStore: SignUpStore;

  projectsStore: ProjectStore;

  userStore: UserStore;

  createProjectStore: CreateProjectStore;

  appbarStore: AppBarStore;

  projectDetailStore: ProjectDetail;

  constructor() {
    this.logInStore = new LoginStore(this);
    this.signUpStore = new SignUpStore(this);
    this.projectsStore = new ProjectStore(this);
    this.userStore = new UserStore(this);
    this.createProjectStore = new CreateProjectStore(this);
    this.appbarStore = new AppBarStore(this);
    this.projectDetailStore = new ProjectDetail(this);
  }
}
