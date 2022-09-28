import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioNuevaCategoriaComponent } from './formulario-nueva-categoria.component';

describe('FormularioNuevaCategoriaComponent', () => {
  let component: FormularioNuevaCategoriaComponent;
  let fixture: ComponentFixture<FormularioNuevaCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioNuevaCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioNuevaCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
