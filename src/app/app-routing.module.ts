import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'todos', loadChildren: () => import('./todo/todo.module').then(mod => mod.TodoModule) },
    { path: '', redirectTo: 'todos', pathMatch: 'full' },
    { path: '**', redirectTo: 'todos', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
