import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public lastID = 1;
  tasks: Task[] = [
    {
      id: 1,
      title: "CRUD para processo seletivo",
      description: "Realizado com foco em UI/UX. Obrigado pela oportunidade.",
      finished: true,
      created: new Date()
    }
  ];

  constructor() { }

  create(task: Task): Observable<Task> {
    this.tasks.push(task);
    return of(task);
  }

  retrieve(): Observable<Task[]> {
    return of(this.tasks);
  }

  update(task: Task): Observable<Task> {
    const index = this.tasks.map(function (e) { return e.id; }).indexOf(task.id);
    if (index) {
      this.tasks[index] = task;
    }
    return of(task);
  }

  delete(task: Task): Observable<Task> {
    const index = this.tasks.map(function (e) { return e.id; }).indexOf(task.id);
    if (index) {
      this.tasks.splice(index, 1);
    }
    return of(task);
  }
}
