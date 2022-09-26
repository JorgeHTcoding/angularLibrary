import { Component, OnInit } from '@angular/core';
import { LibroService } from 'src/app/shared/libro.service';
import { Libro } from 'src/app/Models/libro';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  public libroActivo!: Libro;
  public group:any;
  public groupShown:any;
  public itGroup: number = 0;
  public biblioteca:any;
  public arrayLibros:Libro[] = [];
  public libro!:Libro;
  public imagesForSlider:any;

  // slides:any;
  // slideConfig = { slidesToShow: 1, slidesToScroll: 1 };
 
  // removeSlide() {
  //   this.slides.length = this.slides.length - 1;
  // }
  // slickInit(e: any) {
  //   console.log('slick initialized');
  // }
  // breakpoint(e: any) {
  //   console.log('breakpoint');
  // }
  // afterChange(e: any) {
  //   console.log('afterChange');
  // }
  // beforeChange(e: any) {
  //   console.log('beforeChange');
  // }

  constructor(public libroService:LibroService) {  
    this.libroService = libroService;
    console.log("entramos al constructor")
  }

  ngOnInit(): void {    
    console.log("iniciamos on init")
    this.libroService.getAll().subscribe(data => {  
            
      this.imagesForSlider = data;      
      console.log("Group: ")      
      console.log(this.imagesForSlider)
      
    
    })  
  
  
  }


}
