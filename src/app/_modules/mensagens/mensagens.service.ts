import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_API } from 'src/app/_shared/url.api';

@Injectable({
  providedIn: 'root'
})
export class MensagensService {
  constructor(private httpclient: HttpClient) {}

  buscarMensagens() {
    return this.httpclient.get<any>(`${URL_API}/mensagem`);
  }

  cadastrarMensagem(mensagem) {
    return this.httpclient.post<any>(`${URL_API}/mensagem`, mensagem);
  }

  excluirMensagem(idMensagem) {
    return this.httpclient.delete<any>(`${URL_API}/mensagem/${idMensagem}`);
  }

  buscarAssuntos() {
    return this.httpclient.get<any>(`${URL_API}/assunto`);
  }
}
