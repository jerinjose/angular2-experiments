"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Include
var core_1 = require('@angular/core');
// Component
var TodoComponent = (function () {
    function TodoComponent() {
        this.todoList = [];
        this.count = 1;
        this.text = '';
    }
    TodoComponent.prototype.addTodos = function () {
        this.todoList.push({ id: this.count, name: this.text, done: false });
        this.count = this.count + 1;
        this.text = '';
    };
    TodoComponent.prototype.removeTodo = function (todo) {
        var tempArray = this.todoList;
        for (var i = 0; i < tempArray.length; i++) {
            if (todo.id == tempArray[i].id) {
                tempArray.splice(i, 1);
            }
        }
        this.todoList = tempArray;
    };
    TodoComponent = __decorate([
        core_1.Component({
            selector: 'my-todo',
            template: "<div class=\"container\">\n                    <div class=\"container\">\n                        <div class=\"row todo-form\">\n                            <div class=\"col-sm-6\">\n                                <input class=\"form-control input-text\" [(ngModel)]=\"text\" placeholder=\"Add Todos\"/>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <button class=\"btn btn-primary\" (click)=\"addTodos()\">Add</button>\n                            </div>\n                        </div>\n                    </div>\n                    <div *ngIf=\"todoList.length > 0\" class=\"container todo-list\">\n                        <table class=\"table\">\n                              <thead>\n                                <tr>\n                                  <th>#</th>\n                                  <th>Todo</th>\n                                  <th>Done</th>\n                                  <th>Action</th>\n                                </tr>\n                              </thead>\n                              <tbody>\n                                    <tr *ngFor=\"let todo of todoList;let i = index\">\n                                      <td>{{i+1}}</td>\n                                      <td [class.lineThrough]=\"todo.done\">{{todo.name}}</td>\n                                      <td>\n                                          <input type=\"checkbox\" [(ngModel)]=\"todo.done\"/>\n                                      </td>\n                                      <td>\n                                          <button class=\"btn btn-danger\" (click)=\"removeTodo(todo)\">Delete</button>\n                                      </td>\n                                    </tr>\n                              </tbody>\n                            </table>\n                    </div>\n            </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], TodoComponent);
    return TodoComponent;
}());
exports.TodoComponent = TodoComponent;
//# sourceMappingURL=todo.component.js.map