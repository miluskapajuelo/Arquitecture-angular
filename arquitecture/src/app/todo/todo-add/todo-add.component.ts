import { Component, OnInit } from '@angular/core';
import { TodoStore } from '../todo.store';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  description: string;
  constructor( private store: TodoStore ) {
    this.description = '';
  }

  ngOnInit(): void {
  }

  onSave(){
    this.store.save({description: this.description, done: false});
    this.description = '';
  }

}
