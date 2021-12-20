import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../interfaces/cliente.interface';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  arrClientes: Cliente[];
  pagina: number;

  constructor(
    private clientesService: ClientesService
  ) {
    this.arrClientes = [];
    this.pagina = 1;
  }

  ngOnInit(): void {
    this.clientesService.getAll()
      .then((response) => {
        this.arrClientes = response;
      })
      .catch(error => console.log(error));
  }

  async cambiaPagina(siguiente: boolean) {
    if (siguiente) {
      this.pagina++;
    } else {
      this.pagina--;
    }
    const response = await this.clientesService.getAll(this.pagina);
    this.arrClientes = response;
  }

}



/**
 * 
 * 1 - Creación del formulario con los campos necesarios para crear un cliente
 * 2 - En el servicio de clientes, un método que envíe la petición al back
 * 3 - Gestionar la respuesta del back
 * 
 */