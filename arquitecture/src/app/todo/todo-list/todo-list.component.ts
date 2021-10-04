import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskInterface } from '../task';
import { TodoStore } from '../todo.store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  tasks$: Observable<TaskInterface[]> = this.store.state$

  constructor( private store: TodoStore) {
  }

  ngOnInit(): void {

  }

  onMark =(task: TaskInterface) =>{
    this.store.markDone(task)
  }

}
