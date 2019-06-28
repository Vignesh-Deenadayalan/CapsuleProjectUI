import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { ViewTaskComponent } from './viewtask/view-task.component';
import { AddTaskComponent } from './addtask/add-task.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';
import { UpdateTaskComponent } from './update-task/update-task.component';
@NgModule({
  imports:      [ BrowserModule,  HttpClientModule, AppRoutingModule ,FormsModule],
  declarations: [ AppComponent, TaskComponent, ViewTaskComponent, AddTaskComponent, UpdateTaskComponent],
  bootstrap:    [ AppComponent ],
  providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}]
})
export class AppModule { }

