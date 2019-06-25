import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_API } from 'src/app/_shared/url.api';
import { Mensagem } from 'src/app/_shared/models/Mensagem';
import { Assunto } from 'src/app/_shared/models/Assunto';

@Injectable({
  providedIn: 'root'
})
export class MensagensService {
  constructor(private httpclient: HttpClient) {}

  buscarMensagens() {
    return this.httpclient.get<Mensagem[]>(`${URL_API}/mensagem`);
  }

  cadastrarMensagem(mensagem) {
    return this.httpclient.post<Mensagem>(`${URL_API}/mensagem`, mensagem);
  }

  excluirMensagem(idMensagem) {
    return this.httpclient.delete<String>(`${URL_API}/mensagem/${idMensagem}`);
  }

  buscarAssuntos() {
    return this.httpclient.get<Assunto[]>(`${URL_API}/assunto`);
  }
}
