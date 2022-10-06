import { Component } from '@angular/core';
import { Person } from './person/person.component';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name:string = "Jose";
  people:Person[]=[];
  id:number=0;
  
  constructor() {}


  //Añade una persona al array, usando un id que aumenta automaticamente y el nombre.
  addPerson(n:string){
    this.people.push({id:this.id++,name:n});
    
  }

  //Elimina una persona del array usando el id como index.
  removePerson(_id:number){
    
    //Guardo en una variable el index, para ello uso findIndex y busco por el id.
    var index = this.people.findIndex((p => p.id == _id)); //=> = fuction (p){return p.id==_id}
    //Si el id es mayor o igual a 0
    if(index >= 0){
      this.people.splice(index,1);//Elimina 1 elemento del array con el index (X)
    }
  }

}
