import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',     /* Nombre del componente */
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  //*ngIf= true o false
  
  productos:any[]=[
    {
      "productoId":1,
      "Modelo":"Sentra",
      "Descripcion":"4 puertas",
      "Precio": 20000,
      "Year":2023,
      "Marca":"NISSAN",
      "Color":"Azul",
      "ImagenUrl":"https://th.bing.com/th/id/OIP.yxqg01EsTpLP1IoF59T4NgHaE6?rs=1&pid=ImgDetMain.jpg"
    },
    {
      "productoId":2,
      "Modelo":"A4",
      "Descripcion":"4 puertas",
      "Precio": 30000,
      "Year":2022,
      "Marca":"AUDI",
      "Color":"Blanco",
      "ImagenUrl":"https://th.bing.com/th/id/OIP.IkM1K_U6YcMGIjb7iXKobQHaEo?rs=1&pid=ImgDetMain.jpg"
    },
    {
      "productoId":3,
      "Modelo":"Rio",
      "Descripcion":"4 puertas",
      "Precio": 150000,
      "Year":2020,
      "Marca":"KIA",
      "Color":"Rojo",
      "ImagenUrl":"https://th.bing.com/th/id/OIP.L9REaQeu5ZIq5vKMpnMg-wHaFj?rs=1&pid=ImgDetMain.jpg"
    }
  ]

}
