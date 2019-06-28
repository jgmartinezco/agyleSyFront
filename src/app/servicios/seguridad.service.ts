import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario } from '../modelos';
import { ApplicationHttpClient } from '../servicios/peticion-http.service';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  private _usuario: Usuario;

  constructor(private http: ApplicationHttpClient) { }

  login(): Usuario {
    return this._usuario;
  }

  obtenerUsuario(): Usuario {
    return this._usuario;
  }
}
