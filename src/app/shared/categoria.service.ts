import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../Models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  public url:string = "https://api-tek-library.herokuapp.com";
  public categoria!:Categoria;
  
  constructor(public http:HttpClient) { 
    
  }

  // Obtenemos una categoría

  getOne(id_categoria:number):Observable<Object>{
    console.log("Entramos a getOne categoria con id: ")
    console.log(id_categoria)
    this.url="https://api-tek-library.herokuapp.com/categoria?id_categoria=" + id_categoria;
    return this.http.get(this.url);
  }  

  // Obtenemos todas las categorías

  getAll():Observable<Object>{
    this.url="https://api-tek-library.herokuapp.com/categoria";
    return this.http.get(this.url);
  }

  // Creamos una entrada de categoría

  postOne(categoria:Categoria):Observable<Object>{
    this.url="https://api-tek-library.herokuapp.com/categoria";
    return this.http.post<Categoria>(this.url,categoria);
  }

  // Editamos una entrada de categoria

  editOne(categoria:Categoria):Observable<Object>{
    this.url="https://api-tek-library.herokuapp.com/categoria";       
    return this.http.put<Categoria>(this.url,categoria);
  }
  // Eliminamos una entrada de categoria con su id

  deleteOne(id_categoria:number):Observable<Object>{
    this.url="https://api-tek-library.herokuapp.com/categoria?id_categoria=" + id_categoria;
    return this.http.delete(this.url);
  }
}
