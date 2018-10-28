import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo List App';
  todos = [
    {
      label: 'Food shopping'
    },
    {
      label: 'lunch'
    },
    {
      label: 'fruit'
    },
  ];
  
  addToList(newThing){
   var newToDo = {
     label: newThing
   };
   this.todos.push(newToDo);
  }
  
  markItemDone(todo){
    this.todos=this.todos.filter(r=>r.label !== todo.label);
  }
  
}
