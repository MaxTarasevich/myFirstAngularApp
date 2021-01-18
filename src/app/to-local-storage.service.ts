import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToLocalStorageService {

  constructor() { }
  setToLocalStorage(key:string,data:string){
    localStorage.setItem(key,data)
  }
  getFromLocalStorage(key:string){
  return localStorage.getItem(key)
  }
}
