import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import {tap} from 'rxjs/operators';




export interface Comments {
  postId:number,
  id:number,
  name:string,
  email:	string,
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
