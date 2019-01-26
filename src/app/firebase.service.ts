import { Injectable } from '@angular/core';
import { config } from "./app.config"
import { AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection } from '@angular/fire/firestore';
import { Task } from "./app.model";

import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  
  private tasksCollection: AngularFirestoreCollection<Task>;
  task : Task;
  tasksList : Observable<Task[]>


  constructor(public db: AngularFirestore) { 
    // creates the collection
    this.tasksCollection = db.collection<Task>('Tasks',ref =>{
      return ref.orderBy('description');
    }); 
  }

  getAllTheTasks(): Observable<Task[]>{
    this.tasksList = this.tasksCollection.valueChanges();
    return this.tasksList;
  }
  //   return this.tasksCollection.get().subscribe(function(querySnapshot){
  //     querySnapshot.forEach(function(doc) {
  //       // doc.data() is never undefined for query doc snapshots
  //       console.log(doc.id, " => ", doc.data());
  //   });
  // });

//   return this.
// }


  // adds the Task object to the collection
  addTheTask(taskName: string){
    this.task = {
      description : taskName,
      uniqueId: ""
    }
    this.tasksCollection.add(this.task);
  }



}

