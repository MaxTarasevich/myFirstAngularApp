import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {tap} from 'rxjs/operators';




export interface Images {
  id: string,
author: string,
width: number,
height: number,
url: string,
download_url: string,
}

@Injectable({
  providedIn: 'root'
})
export class ImageGetService {

public imagesArr:Images[] = []

  constructor(private http: HttpClient) { }

getImage():Observable<Images[]>{
  return this.http.get<Images[]>('https://picsum.photos/v2/list')
  .pipe(tap((imagesArr)=>{
    for(let i = 0; i<=10; i++){
      this.imagesArr.push(imagesArr[Math.ceil(Math.random()*29)])
    }
   
  }))
}

}
