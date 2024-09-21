import { Component } from '@angular/core';
import { IProductos } from '../productos';


@Component({
  selector: 'app-product-list',     /* Nombre del componente */
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  imageWidth:number=200;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='';

  muestrasImg():void{
    this.muestraImg=!this.muestraImg
  }
  //*ngIf= true o false
  
  productos:IProductos[]=[
    {
      "productoId":1,
      "Modelo":"Sentra",
      "Descripcion":"4 puertas",
      "Precio": 20000,
      "Year":"febrero 2 2023",
      "Marca":"NISSAN",
      "Color":"Azul",
      "ImagenUrl":"https://th.bing.com/th/id/OIP.yxqg01EsTpLP1IoF59T4NgHaE6?rs=1&pid=ImgDetMain.jpg"
    },
    {
      "productoId":2,
      "Modelo":"A4",
      "Descripcion":"4 puertas",
      "Precio": 30000,
      "Year":"Marzo 23 2022",
      "Marca":"AUDI",
      "Color":"Blanco",
      "ImagenUrl":"https://th.bing.com/th/id/OIP.IkM1K_U6YcMGIjb7iXKobQHaEo?rs=1&pid=ImgDetMain.jpg"
    },
    {
      "productoId":3,
      "Modelo":"Rio",
      "Descripcion":"4 puertas",
      "Precio": 150000,
      "Year":"Septiembre 5 2020",
      "Marca":"KIA",
      "Color":"Rojo",
      "ImagenUrl":"https://th.bing.com/th/id/OIP.L9REaQeu5ZIq5vKMpnMg-wHaFj?rs=1&pid=ImgDetMain.jpg"
    }
  ]

}
