import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TaskInterface } from './task';

@Injectable({
  providedIn: 'root'
})
export class TodoStore {

  private stateBs = new BehaviorSubject<TaskInterface[]>([]);
  state$ = this.stateBs.asObservable();

  constructor() { }

  save(task:TaskInterface) {
    this.stateBs.next([...this.stateBs.value, task]);
  }

  markDone(task: TaskInterface){
    this.stateBs.next([...this.stateBs.value.filter(item => item.description !==task.description), {...task, done: !task.done}
    ])
  }

}
