import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLogged: boolean;

  constructor(
    private router: Router,
    private usuariosService: UsuariosService
  ) {
    this.isLogged = true;
  }

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    // Suscripción para "enterarnos" del login
    this.usuariosService.loggedObs().subscribe((entra) => {
      this.isLogged = entra;
    });
  }

  async onClickLogout() {
    const result = await Swal.fire({
      title: 'Logout',
      text: 'Vas a salir de la aplicación. ¿estás segur@?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Salir'
    });

    if (result.isConfirmed) {
      localStorage.removeItem('token');
      this.usuariosService.loginComplete(false);
      this.router.navigate(['/login']);
    }

  }

}
