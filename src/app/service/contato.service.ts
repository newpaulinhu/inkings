import { take } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private http: HttpClient) {}

  public contato(contato: any) {
    return this.http.post<any>(environment.apiHost + '/contato', contato).pipe(take(1));
  }

}
