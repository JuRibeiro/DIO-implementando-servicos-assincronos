import { User } from 'src/app/models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://sheet.best/api/sheets/8b88f919-c6e8-4156-8c15-82911fd26128';
  httpOptions = 
  {
    headers: new HttpHeaders(
      {
        'content-Type': 'application/json'
      }
    )
  }

  constructor(private httpClient: HttpClient) { }

  //metodos

  // Retorna a lista de usuarios (READ)
  getUsers(): Observable<User[]>
  {
    return this.httpClient.get<User[]>(this.apiUrl);
  }

  // Salvar usuário na planilha (CREATE)
  postUser(user: User): Observable<User>
  {
    return this.httpClient.post<User>(this.apiUrl, user, this.httpOptions);
  }

  // Exclui o usuário selecionado (DELETE)
  deleteUser(id: number): Observable<User>
  {
                                       //filtro    
    return this.httpClient.delete<User>(`${this.apiUrl}/id/${id}`)
  }

  // Edita o usuário (UPDATE)
  editUser(id: string, user: User):Observable<User>
  {
    return this.httpClient.put<User>(`${this.apiUrl}/id/${id}`, user, this.httpOptions);
  }

  // Lista usuário único
  getUser(id: string): Observable<User[]>
  {
    return this.httpClient.get<User[]>(`${this.apiUrl}/id/${id}`)
  }
}
