import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Back To Chorin';

  searchtext: string = '';

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

  completeTask(iscompleted: ToDo){
    iscompleted.completed = true;
  }

  removeTask(remove: ToDo){
    this.thingstodo.splice(this.thingstodo.indexOf(remove),1);
  }

  get everythingCompleted(){
    for(let i=0; i < this.thingstodo.length; i++){
      if(!this.thingstodo[i].completed){
        return false;
      }
    }
    return true;
  }

  get filteredTodoList(){
    if(this.searchtext.length<=0){
      return this.thingstodo;
    }
    const filteredList = this.thingstodo.filter(x =>{
      return x.task.toLowerCase().includes(this.searchtext.toLowerCase());
    })
    return filteredList;
  }

}

interface ToDo{
  task: string;
  completed: boolean;
  editing: boolean;
}


