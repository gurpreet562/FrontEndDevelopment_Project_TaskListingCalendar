import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { TaskService } from 'app/services/task.service';
import { TaskList } from './interface/tasklist';

@Component({
  selector: 'app-root',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [TaskService]
})

export class AppComponent implements OnInit {
  /**Public variable */
  taskArray: TaskList[] = [];
  

  
  taskDetail: TaskList;

 
  constructor(private _taskService: TaskService) { }

  ngOnInit() {
    this.taskModel = {
      taskName: '',
      taskDescription: '',
      taskCompleteDate: ''
     
    };

    
  }

  /**Add a movie */
  addCriketer(values) {
    // values : {
    //   taskName: ""
    //   taskDescription: ""
    //   taskCompleteDate: ""
    //   
    // }
    this.taskDetail = {
      taskName: values.taskName,
      taskDescription: values.taskDescription,
      taskCompleteDate: values.taskCompleteDate,
      };
    // /**Call function from service. */
    this._taskService.addTask(this.taskDetail);
    // Using 3rd party library to show message.
    alertify.notify('Task Added Successfully', 'success', 3);

    this.taskArray = this._taskService.getTask();
  };

   

}
