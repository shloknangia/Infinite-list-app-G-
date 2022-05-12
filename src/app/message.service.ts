import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }


  public getMessages(token: string){
    let url = 'http://message-list.appspot.com/messages';
    if(token != ''){
      url += '?pageToken=' + token;
    }
    return this.http.get(url);
  }
}
