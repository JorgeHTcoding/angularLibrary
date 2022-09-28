import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Categoria } from 'src/app/Models/categoria';
import { CategoriaService } from 'src/app/shared/categoria.service';

@Component({
  selector: 'app-modal-edit-categoria',
  templateUrl: './modal-edit-categoria.component.html',
  styleUrls: ['./modal-edit-categoria.component.css']
})
export class ModalEditCategoriaComponent implements OnInit {
  public categoria: Categoria;
  public myForm!: FormGroup;
  public listaCat: any;
  public arrayNum: number[] = [];
  public selectedCat: any;
  public selectedCatId!: number;


  constructor(private categoriaService: CategoriaService) {
    this.categoria = new Categoria(0,"");   
      }
 
  public onSelected(event: any) {
    this.selectedCat = event.target.value;
    console.log("this.selectedCat")
    console.log(this.selectedCat)
    for (let i = 0; i < this.listaCat.length; i++) {
      if (this.listaCat[i].nombre == this.selectedCat) {
        this.selectedCatId = this.listaCat[i].id_categoria
      }

    }
    console.log("this.selectedCatId")
    console.log(this.selectedCatId)

  }

  public onDelete() {
    console.log("this.selectedCatId on delete")
    console.log(this.selectedCatId)
    this.categoriaService.deleteOne(this.selectedCatId).subscribe((data: any) => {
      console.log("Category deleted");


    });

  }

  public onSubmit(form: NgForm) {
    this.categoria.id_categoria = this.selectedCatId
    this.categoria.nombre = form.value.nombre
    
    console.log("this categoria: ")
    console.log(this.categoria)
    this.categoriaService.editOne(this.categoria).subscribe((data: any) => {
      this.categoriaService.categoria = data.result;     

    });
  }

  ngOnInit(): void {
    this.categoriaService.getAll().subscribe(data => {
      this.listaCat = data;
      console.log("listaCat: ")
      console.log(this.listaCat)

    });
  }

}
