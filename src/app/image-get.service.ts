import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
/*
export interface Images {
  id: string,
author: string,
width: number,
height: number,
url: string,
download_url: string,
}
*/
@Injectable({
  providedIn: 'root'
})
export class ImageGetService {

imagesArr!:any

  constructor(private http: HttpClient) { }

getImage(){
  return this.http.get('https://picsum.photos/v2/list')
}

}
