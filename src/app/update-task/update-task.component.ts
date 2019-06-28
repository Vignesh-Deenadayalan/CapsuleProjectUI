import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,ActivatedRoute } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateService } from 'src/app/viewtask/create.service';
import { Create } from './create';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  providers: [ CreateService ],
  styleUrls: ['./update-task.component.scss']
})
export class UpdateTaskComponent implements OnInit {
  heroes: Create[];
  editHero: Create; 
  hero:Create;
 addTask:any;
  message:string;
  public id: any;

  constructor(private createService:CreateService
    ,private route: ActivatedRoute,private router:Router)  { 
    
    this.addTask={task:'',priority:0,parentTask:'',startDate:'',endDate:''};
    console.log(this.createService.rowData);
  }
  update(obj:Create):string {
    // const newHero: Create = { taskId,parentId,task,startDate,endDate,priority,parentTask  } as Create;
    const newHero: Create=obj ;
       this.createService.updateTitle(newHero)
         .subscribe(hero => {
           console.log(hero);
           // replace the hero in the heroes list with update from server
           //const ix = hero ? this.heroes.findIndex(h => h.taskId === hero.taskId) : -1;
           //if (ix > -1) { this.heroes[ix] = hero; }
 this.message=hero.message;
 console.log(this.message);
         });
         return this.message;
   }

   getTask(id:number): void {
    this.createService.getTask(id)
      .subscribe(hero => {this.hero = hero;
      console.log(hero)
      this.addTask=hero;
    });
  }
  cancel(){
    //const newHero: Create=obj ;
    this.router.navigate(['/ViewTask']);
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
     console.log(this.route.snapshot.paramMap.get('id'));
     this.id=this.route.snapshot.paramMap.get('id');
     this.getTask( this.id);
  });
  }

}
