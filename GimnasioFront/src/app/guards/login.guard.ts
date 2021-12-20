import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ClientesService } from '../services/clientes.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private clientesService: ClientesService
  ) { }

  async canActivate() {
    if (localStorage.getItem('token')) {
      // El token existe en localstorage
      // lanzo una petición al back para saber si el token es correcto
      const response = await this.clientesService.getAll();
      if (response.error) {
        // El token es incorrecto
        return false;
      }
      // Me devuelve el array de clientes => Token correcto
      return true;
    } else {
      return false;
    }
  }

}