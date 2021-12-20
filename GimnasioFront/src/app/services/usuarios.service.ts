import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Subject } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private baseUrl: string;
  private logged$: Subject<boolean>;

  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = 'http://localhost:3000/api/usuarios';
    this.logged$ = new Subject();
  }

  registro(formValue: { username: string, nombre: string, email: string, password: string }): Promise<any> {
    return firstValueFrom(
      this.httpClient.post<any>(`${this.baseUrl}/registro`, formValue)
    );
  }

  login(formValue: { email: string, password: string }): Promise<any> {
    return firstValueFrom(
      this.httpClient.post<any>(`${this.baseUrl}/login`, formValue)
    );
  }

  perfil(): Promise<Usuario> {
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token')!
      })
    }

    return firstValueFrom(
      this.httpClient.get<Usuario>(`${this.baseUrl}/perfil`, httpOptions)
    );
  }

  loginComplete(entra: boolean) {
    this.logged$.next(entra);
  }

  loggedObs() {
    return this.logged$.asObservable();
  }

}
