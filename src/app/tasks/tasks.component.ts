import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task} from "../app.model"
import {FirebaseService} from "../firebase.service"



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private firebaseService : FirebaseService) { }

  taskList :string[] = [
    "Wash the dishes", 
    " Load the clothes in the dryer.",
    "Fold the clothes up",
    "Cut down the vegetables",
    "Call maintenance guy"
  ];

  usersInput:string = "Edit this task"


  ngOnInit() {
  }

  
  addTask(taskName : string ){
    console.log(taskName);
    this.firebaseService.addTheTask(taskName);
  }


}
