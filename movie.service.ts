import { Injectable } from '@angular/core';
import { TaskList } from 'app/interface/Tasklist';


@Injectable()
export class TaskService {

  taskList: TaskList[] = [];

  /** Add movie in the array List. */
  addTask(taskDetail: TaskList) {
    this.taskList.unshift(taskDetail);
  }

  /**Get the movie list from the array. */
  getTask(): taskList[] {
    return this.taskList;
  }


}
