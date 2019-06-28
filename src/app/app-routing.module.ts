import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { ViewTaskComponent } from './viewtask/view-task.component';
import { AddTaskComponent } from './addtask/add-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';


const routes: Routes = [{
  path: '',
  component: TaskComponent
},
{
  path: 'ViewTask',
 component: ViewTaskComponent
},
{
  path: 'addtask',
 component: AddTaskComponent
},
{
  path: 'updateTask/:id',
 component: UpdateTaskComponent
},
// {
//   path: 'front',
//   component: TaskComponent
// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

