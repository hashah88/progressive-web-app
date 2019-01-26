import { Injectable } from '@angular/core';
import { config } from "./app.config"
import { AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection } from '@angular/fire/firestore';
import { Task } from "./app.model";


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  
  private tasksCollection: AngularFirestoreCollection<Task>;
  task : Task;


  constructor(public db: AngularFirestore) { 
    // creates the collection
    this.tasksCollection = db.collection<Task>('Tasks'); 
  }

  // adds the Task object to the collection
  addTheTask(taskName: string){
    this.task = {
      description : taskName
    }
    this.tasksCollection.add(this.task);
  }



}

