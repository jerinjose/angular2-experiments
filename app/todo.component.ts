// Include
import { Component,Input} from '@angular/core';
import { TodoObj } from './todo';

// Component
@Component({
    selector: 'my-app',
    template: `<div class="container">
                    <div class="container">
                        <div class="row todo-form">
                            <div class="col-sm-6">
                                <input class="form-control input-text" [(ngModel)]="text" placeholder="Add Todos"/>
                            </div>
                            <div class="col-sm-6">
                                <button class="btn btn-primary" (click)="addTodos()">Add</button>
                            </div>
                        </div>
                    </div>
                    <div *ngIf="todoList.length > 0" class="container todo-list">
                        <table class="table">
                              <thead>
                                <tr>
                                  <th>#</th>
                                  <th>Todo</th>
                                  <th>Done</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                    <tr *ngFor="let todo of todoList;let i = index">
                                      <td>{{i+1}}</td>
                                      <td [class.lineThrough]="todo.done">{{todo.name}}</td>
                                      <td>
                                          <input type="checkbox" [(ngModel)]="todo.done"/>
                                      </td>
                                      <td>
                                          <button class="btn btn-danger" (click)="removeTodo(todo)">Delete</button>
                                      </td>
                                    </tr>
                              </tbody>
                            </table>
                    </div>
            </div>`
})


// Export
export class TodoComponent {
  public count : number;
  public todoList : TodoObj[];
  public text : string;

  constructor() {
     this.todoList = [];
     this.count = 1;
     this.text = '';
   }

  addTodos(){
      this.todoList.push({id:this.count,name:this.text,done:false});
      this.count = this.count + 1;
      this.text = '';
  }

  removeTodo(todo:TodoObj){
      let tempArray = this.todoList;
      for(let i=0;i < tempArray.length; i++){
        if(todo.id == tempArray[i].id){
            tempArray.splice(i,1);
        }
      }
      this.todoList = tempArray;
  }
}
