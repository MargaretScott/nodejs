import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private usuariosService: UsuariosService
  ) {
    this.formulario = new FormGroup({
      email: new FormControl('belen@gmail.com'),
      password: new FormControl('mariO12345!')
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    try {
      const response = await this.usuariosService.login(this.formulario.value);
      Swal.fire('Bienvenid@', 'Login correcto', 'success');
      console.log(response.token);
      localStorage.setItem('token', response.token);
    } catch (err: any) {
      // Esto lo hacemos así porque nuestro BACK devuelve este objeto concreto. Para otras APIs habría que investigar la respuesta
      const { error: msg } = err.error;
      Swal.fire('Error', msg, 'error');
    }
  }

}
