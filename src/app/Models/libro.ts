export class Libro {

    public id_libro:number;
    public titulo:string;
    public autor:string;
    public portada:string;
    public editorial:string;
    public fechaPublicacion:string;
    public tapa:string;
    public sinapsis:string;

    
    constructor(titulo:string,autor:string,portada:string,editorial:string,fechaPublicacion:string,tapa:string,sinapsis:string){

        this.id_libro = 0;
        this.titulo = titulo;
        this.autor = autor;
        this.portada = portada;
        this.editorial = editorial;
        this.fechaPublicacion = fechaPublicacion;
        this.tapa = tapa;
        this.sinapsis = sinapsis;

    }
}
