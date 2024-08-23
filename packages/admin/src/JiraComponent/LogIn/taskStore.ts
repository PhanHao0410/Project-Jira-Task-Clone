import { makeObservable, observable, computed, autorun } from 'mobx';

interface ITaskStore {
  tasks: number;
}

export class TaskStore implements ITaskStore {
  tasks = 12;

  constructor() {
    makeObservable(this, {
      tasks: observable,
      contentTask: computed,
    });
    autorun(() => console.log('chekc hahah'));
  }

  get contentTask() {
    return this.tasks;
  }
}

const storeInstance = new TaskStore();
export default storeInstance;
