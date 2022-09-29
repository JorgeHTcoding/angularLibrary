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
  public group: any;
  public groupShown: any;
  public itGroup: number = 0;
  public biblioteca: any;
  public arrayLibros: Libro[] = [];
  public libro!: Libro;
  public imagesForSlider: any;
  public carouselDiv: boolean = false;
  public carouselBtn: boolean = true;
  public postDiv: boolean = true;
  public putDiv: boolean = false;
  public postCatDiv: boolean = true;
  public putCatDiv: boolean = false;


  constructor(public libroService: LibroService) {
    this.libroService = libroService;
    
  }

  ngOnInit(): void {

  }

  public showCarousel() {
    this.carouselBtn = false;
    this.carouselDiv = true;

    this.libroService.getAll().subscribe(data => {
      this.imagesForSlider = data;
      console.log("Data recovered")
      
    })

  }
  public hidePost() {
    this.postDiv = false;
    this.putDiv = true;

  }
  public hidePut() {
    this.postDiv = true;
    this.putDiv = false;
  }
  public hidePostCat() {
    this.postCatDiv = false;
    this.putCatDiv = true;

  }
  public hidePutCat() {
    this.postCatDiv = true;
    this.putCatDiv = false;
  }


}
