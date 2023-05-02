import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from 'src/app/servicios/crud-service.service';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit{


  public isHidden:Boolean=false;

  constructor(private servicio:CrudServiceService){}
  ngOnInit(): void {
    this.servicio.login().subscribe(res=>{
      console.log(res);
    })
  }


  buscar(){

    this.isHidden=!this.isHidden;

  }

}
