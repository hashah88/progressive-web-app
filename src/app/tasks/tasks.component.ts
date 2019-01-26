import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor() { }

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

}
