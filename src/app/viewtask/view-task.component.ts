import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateService } from './create.service';
import { Create } from './create';
import { UpdateTaskComponent } from 'src/app/update-task/update-task.component';

@Component({
  selector: 'ViewTask',
  templateUrl: './view-task.component.html',
  providers: [ CreateService ],
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent  implements OnInit{
  heroes = [];
  editHero: Create; 
  hero:Create;
 addTask:any;
  message:string;
  constructor(private createService:CreateService,private router:Router) { 
    this.addTask={task:'',priority:0,parentTask:'',startDate:'',endDate:''};
  }
  getHeroes(): void {
    this.createService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }


  add( obj:Create): Create {
    this.editHero = undefined;
  console.log(this.addTask);
   // const newHero:  Create =obj;
    // The server will generate the id for this new hero
    //const newHero: Create = { this.task,this.startDate,this.endDate,this.priority,this.parentTask  }as Create;
    this.createService.addTitle(this.addTask)
      .subscribe(hero => {
        console.log(hero);
        this.message=hero.message;
        this.heroes=[];
        this.heroes.push(hero);
      });
        return this.hero;
      
  }

  delete(hero: Create): Create {
    this.heroes = this.heroes.filter(h => h !== hero);

    this.createService.deleteId(hero.taskId).subscribe(hero => {
        console.log(hero['message']);
        this.message=hero['message'];
        console.log(this.message);
      });
    
    /*
    // oops ... subscribe() is missing so nothing happens
    this.heroesService.deleteHero(hero.id);
    */
  
    return this.hero;
  }

  edit(hero) {
    this.editHero = hero;
  }
  
  update(obj:Create):string {
   // const newHero: Create = { taskId,parentId,task,startDate,endDate,priority,parentTask  } as Create;
   const newHero: Create=obj ;
   
      this.createService.updateTitle(newHero)
        .subscribe(hero => {
          console.log(hero);
          // replace the hero in the heroes list with update from server
          const ix = hero ? this.heroes.findIndex(h => h.taskId === hero.taskId) : -1;
          if (ix > -1) { this.heroes[ix] = hero; }
this.message=hero.message;
console.log(this.message);
        });
        return this.message;
  }
  ngOnInit() {
    this.getHeroes();
  }
setRowData(obj:Create):void{
  //const newHero: Create=obj ;
  this.createService.rowData=obj;
  console.log( this.createService.rowData);
  this.router.navigate(['/updateTask',obj.taskId]);
}

}