import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Libro } from '../Models/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  public url:string = "http://localhost:3000";
  public libro!:Libro;

  constructor(public http:HttpClient) { }

  // Obtenemos un libro en específico

  getOne(id_libro:number):Observable<Object>{
    console.log("Entramos a getOne libro con id: ")
    console.log(id_libro)
    this.url="http://localhost:3000/libro?id_libro=" + id_libro;
    return this.http.get(this.url);
  }  

  getLibroSeleccionado(titulo:string):Observable<Object>{
    this.url="http://localhost:3000/libro";
    return this.http.post<string>(this.url,titulo);
  }
  // Obtenemos todos los libros

  getAll():Observable<Object>{
    this.url="http://localhost:3000/libro";
    return this.http.get(this.url);
  }
  
  // Creamos una entrada de libro

  postOne(libro:Libro):Observable<Object>{
    this.url="http://localhost:3000/libro";
    return this.http.post<Libro>(this.url,libro);
  }

  // Editamos una entrada de libro

  editOne(libro:Libro):Observable<Object>{
    this.url="http://localhost:3000/libro";
    return this.http.put<Libro>(this.url,libro);
  }

  // Eliminamos una entrada de libro con su id

  deleteOne(id_libro:number):Observable<Object>{
    this.url="http://localhost:3000/libro?id_libro=" + id_libro;
    return this.http.delete(this.url);
  }

  }
