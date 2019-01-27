import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task} from "../app.model"
import {FirebaseService} from "../firebase.service"
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private firebaseService : FirebaseService) { }
  taskList : Observable<Task[]>
  usersInput:string = "Edit this task"

  ngOnInit() {
    console.log("Hello this is working");
   this.taskList = this.firebaseService.getAllTheTasks();
  }

  addTask(taskName : string ){
    console.log(taskName);
    this.firebaseService.addTheTask(taskName);
  }


}
