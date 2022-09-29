import { Component, OnInit, Input } from '@angular/core';
import { LibroService } from 'src/app/shared/libro.service';
import { Libro } from 'src/app/Models/libro';



@Component({
  selector: 'app-tarjeta-libro',
  templateUrl: './tarjeta-libro.component.html',
  styleUrls: ['./tarjeta-libro.component.css']
})
export class TarjetaLibroComponent implements OnInit {

  public biblioteca:any;
  public arrayLibros:Libro[] = [];  
  @Input() tarjetaPadre!:Libro;


  constructor(public libroService:LibroService) {
    this.libroService = libroService;
    
   }

  ngOnInit(): void {
    
    this.libroService.getAll().subscribe(data => {    
      this.biblioteca = data;
      console.log("Data recovered")
    })    
  }

  deleteLibro(id_libro:number):void{
    console.log("delete id: " + id_libro)
    this.libroService.deleteOne(id_libro).subscribe(data => {
      console.log("Data deleted")
      
    })
  }
 
}


  
  
  



