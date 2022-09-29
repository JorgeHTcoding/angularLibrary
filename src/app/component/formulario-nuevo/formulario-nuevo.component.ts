import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/Models/libro';
import { LibroService } from 'src/app/shared/libro.service';
import { Router } from '@angular/router';
import { FormGroup, NgForm } from '@angular/forms';


@Component({
  selector: 'app-formulario-nuevo',
  templateUrl: './formulario-nuevo.component.html',
  styleUrls: ['./formulario-nuevo.component.css']
})
export class FormularioNuevoComponent implements OnInit {
  public show=true;
  public modalActualizado:boolean=false;
  public libro:Libro;
  public myForm!:FormGroup; 
  public arrayNum:number[] = [];

  constructor(private libroService:LibroService) {
    this.libro = new Libro(0,"","","","","","","",this.arrayNum)
    
   }

  public onSubmit(form:NgForm){   
     
    this.libroService.postOne(this.libro).subscribe((data:any) => {         
      
      console.log("form.value.categorias: ")
      console.log(form.value.categorias)
      console.log("Form values: ")
      console.log(form.value)
      console.log("Post data: ")
      console.log(data)
    })  
    this.ngOnInit();
  }
  ngOnInit(): void {
  }

}
