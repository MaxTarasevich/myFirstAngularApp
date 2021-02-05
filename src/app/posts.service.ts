import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import {tap} from 'rxjs/operators';




export interface Comments {
  userId: number,
  id: number,
  title:string,
  body:string,
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {

public commentsArr:Comments[] = []

  constructor(private http: HttpClient) { }

getComments():Observable<Comments[]>{
  return this.http.get<Comments[]>('https://jsonplaceholder.typicode.com/posts')
  .pipe(tap((commentsArr)=>{
    this.commentsArr = commentsArr
  }))
}

}
