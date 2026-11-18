import { Component } from '@angular/core';

// Interfaz que define la forma que debe tener un producto
interface Producto {
  nombre: string;
  precio: number;
  disponible: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  nombreTienda: string = 'TecnoStore';
  encargado: string = 'Jesús Martínez';
  numeroSucursal: number = 3;
  tiendaAbierta: boolean = true;
  categorias: string[] = ['Celulares', 'Accesorios', 'Audífonos'];

  producto: Producto = {
    nombre: 'Samsung Galaxy A55',
    precio: 3200,
    disponible: true,
  };
}
