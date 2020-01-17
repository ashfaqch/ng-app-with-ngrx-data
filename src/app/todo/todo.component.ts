import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoService } from './todo.service';
import { Todo } from './todo';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
    loading$: Observable<boolean>;
    todos$: Observable<Todo[]>;
    showTodoId: boolean;
    newTodo = { id: null, title: '', complete: false } as Todo;

    constructor(private todoService: TodoService) {
        this.loading$ = this.todoService.loading$;
        this.todos$ = this.todoService.entities$;
    }

    ngOnInit() {
        this.todoService.getAll();
    }

    addTodo(): void {
        if (this.newTodo.title.trim().length === 0) {
            return;
        }

        let todos = [] as Todo[];
        this.todos$.subscribe(x => todos = x);
        if (todos.length === 0) {
            this.newTodo.id = 1;
        }

        this.todoService.add(this.newTodo);
        Object.assign(this.newTodo, { id: null, title: '', complete: false });
    }

    updateTodo(todo): void {
        this.todoService.update(todo);
    }

    deleteTodo(todo): void {
        this.todoService.delete(todo);
    }

    showIdChanged(value: boolean): void {
        this.showTodoId = value;
    }
}
