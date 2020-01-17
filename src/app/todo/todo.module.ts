import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppStoreModule } from './store/app-store.module';
import { TodoComponent } from './todo.component';
import { TodoService } from './todo.service';
import { Database } from './database';

const routes: Routes = [
    { path: '', component: TodoComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,
        HttpClientModule,
        InMemoryWebApiModule.forRoot(Database),
        AppStoreModule
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        TodoComponent
    ],
    providers: [
        TodoService
    ]
})
export class TodoModule { }
