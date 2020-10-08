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
    this.thingstodo.push({task: newtask, completed: false})
  }

  completeTask(iscompleted: ToDo){
    //let index = this.thingstodo.indexOf(iscompleted);
    iscompleted.completed = true;
    //this.thingstodo[index] = iscompleted;
  }
}

interface ToDo{
  task: string;
  completed: boolean;
}


