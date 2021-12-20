import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interface';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario?: Usuario;

  constructor(
    private usuariosService: UsuariosService
  ) {
  }

  ngOnInit(): void {
    this.usuariosService.perfil()
      .then(response => this.usuario = response)
      .catch(err => console.log(err));
  }

}
