import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  task = signal([
    
    'Instalar angular cli',
    'Crear proyecto',
    'Crear componente',
    'Crear servicio',

  ]);

  changeHandles(event:Event){
    const input =event.target as HTMLInputElement;
    const newTasks=input.value;
    this.task.update((tasks)=>[...tasks, newTasks]);
  }
  deleteTask(index:number){
    this.task.update((tasks)=>tasks.filter((task, position)=>position!== index));

  }
  updateTask(index:number){
    this.task.update((task)=>{
      return task.map((task, position)=>{
        if (position===index){
          return{
            ...task,
            cmpleted: !task.completed
          }
        }
        return task;
      })
    })
  }
}
