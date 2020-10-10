import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Back To Chorin';

  thingstodo: ToDo[]=[
    {task: "Feed Chickens", completed: false, editing: false},
    {task: "Water Chickens", completed: true, editing: false},
    {task: "Weed Garden", completed: false, editing: false},
    {task: "Water Garden", completed: true, editing: false},
    {task: "Inspect Beehives", completed: false, editing: false},
    {task: "Harvest Honey", completed: false, editing: false},
    {task: "Mow Lawn", completed: true, editing: false},
    {task: "Weed Whip", completed: false, editing: false},
  ];

  addTask(newtask: string){
    this.thingstodo.push({task: newtask, completed: false, editing: false});
  }
/*
  updateitem(itemedit: string){ //this is meant to edit but will push a new "toDo" if called
    this.thingstodo.push({task: itemedit, completed: false});
  } */

  completeTask(iscompleted: ToDo){
    iscompleted.completed = true;
  }

  removeTask(remove: ToDo){
    this.thingstodo.splice(this.thingstodo.indexOf(remove),1);
    /*
    this.thingstodo = this.thingstodo.filter(item=>{return item!==remove});
    console.log("youve clicked the x");
    console.log(this.thingstodo);*/
  }

  get everythingCompleted(){
    for(let i=0; i < this.thingstodo.length; i++){
      if(!this.thingstodo[i].completed){
        return false;
      }
    }
    return true;
  }

}

interface ToDo{
  task: string;
  completed: boolean;
  editing: boolean;
}


