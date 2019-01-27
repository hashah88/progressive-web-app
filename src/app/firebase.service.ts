import { Injectable } from '@angular/core';
import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Task } from "./app.model";
import { Observable } from 'rxjs/internal/Observable';
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private tasksCollection: AngularFirestoreCollection<Task>;
  task: Task;
  tasksList: Observable<any[]>;


  constructor(public db: AngularFirestore) {
    // The database reference
    this.tasksCollection = db.collection<Task>('Tasks', ref => {
      return ref.orderBy('description');
    });
  }

  documentToDomainObject = _ => {
    const object = _.payload.doc.data();
    object.id = _.payload.doc.id;
    return object;
  }

  // Fetches all the tasks from the database. 
  getAllTheTasks() {
    this.tasksList = this.tasksCollection.snapshotChanges()
      .pipe(map(actions => actions.map(this.documentToDomainObject)));
    return this.tasksList;
  }

  // Adss the task as a document in the Database.
  addTheTask(taskName: string) {
    this.task = {
      description: taskName,
      uniqueId: ""
    }
    this.tasksCollection.add(this.task);
  }
}

