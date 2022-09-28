import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Categoria } from 'src/app/Models/categoria';
import { CategoriaService } from 'src/app/shared/categoria.service';


@Component({
  selector: 'app-formulario-nueva-categoria',
  templateUrl: './formulario-nueva-categoria.component.html',
  styleUrls: ['./formulario-nueva-categoria.component.css']
})
export class FormularioNuevaCategoriaComponent implements OnInit {
  public categoria:Categoria;
  public myForm!:FormGroup; 
 
  constructor(private categoriaService:CategoriaService) { 
    this.categoria = new Categoria(0,"");
  }
  public onSubmit(form:NgForm){   
     
    this.categoriaService.postOne(this.categoria).subscribe((data:any) => {         
            
      console.log("Form values: ")
      console.log(form.value)
      console.log("Post data: ")
      console.log(data)
    })  
  }
  ngOnInit(): void {
  }

}
