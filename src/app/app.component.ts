import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Back To Chorin';

  thingstodo: ToDo[]=[
    {task: "Feed Chickens", completed: false},
    {task: "Water Chickens", completed: true},
    {task: "Weed Garden", completed: false},
    {task: "Water Garden", completed: true},
    {task: "Inspect Beehives", completed: false},
    {task: "Harvest Honey", completed: false},
    {task: "Mow Lawn", completed: true},
    {task: "Weed Whip", completed: false},
  ];

  addTask(newtask: string){
    this.thingstodo.push({task: newtask, completed: false});
  }

  completeTask(iscompleted: ToDo){
    iscompleted.completed = true;
  }

  removeTask(remove: ToDo){
    this.thingstodo = this.thingstodo.filter(item=>item!==remove);
    console.log("youve clicked the x");
  }
}

interface ToDo{
  task: string;
  completed: boolean;
}


