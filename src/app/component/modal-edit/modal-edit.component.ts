import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/Models/libro';
import { LibroService } from 'src/app/shared/libro.service';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.css']
})
export class ModalEditComponent implements OnInit {
  public libro: Libro;
  public myForm!: FormGroup;
  public biblioteca: any; 
  public arrayNum:number[] = [];
  public libroCargado!:Libro;
  


  constructor(private libroService: LibroService) {
    this.libro = new Libro(2,"","","","","","","",this.arrayNum)
  }

 
  public onSubmit(form: NgForm) {
   this.libro = form.value
   console.log("this libro: ")
   console.log(this.libro)
    this.libroService.editOne(this.libro).subscribe((data:any) =>{     
      this.libroService.libro = data.result;   
      console.log("Form values: ")
      console.log(form.value)

    })
  }
  ngOnInit(): void {
    this.libroService.getAll().subscribe(data => {
      this.biblioteca = data;
      console.log("Biblioteca: ")
      console.log(this.biblioteca)     
     
    });
  }
}