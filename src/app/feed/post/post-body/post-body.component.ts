import { Component, Input, OnInit } from '@angular/core';
import {ToLocalStorageService} from '../../../to-local-storage.service'


@Component({
  selector: 'app-post-body',
  templateUrl: './post-body.component.html',
  styleUrls: ['./post-body.component.scss']
})
export class PostBodyComponent implements OnInit {
  @Input()likes:any
  @Input()index:any

  likesFromStore:any

  constructor(private LocalStore: ToLocalStorageService) { }

  ngOnInit(): void {
    if(this.LocalStore.getFromLocalStorage(`likes${this.index}`)){
        this.likesFromStore = this.LocalStore.getFromLocalStorage(`likes${this.index}`)
        console.log(this.likesFromStore,'+++++++++++++++++++++++++++')
        if(parseInt( this.likesFromStore)>this.likes){
          document.querySelector('.likes')!.classList.add('liked')
        }
       
    }else{
      this.LocalStore.setToLocalStorage(`likes${this.index}`,`${this.likes}`)
      this.likesFromStore = this.LocalStore.getFromLocalStorage(`likes${this.index}`)
    }
  }
  likesToggle(){
    if(this.likes == parseInt( this.likesFromStore)){
      this.likesFromStore = parseInt( this.likesFromStore) +1
      this.LocalStore.setToLocalStorage(`likes${this.index}`,`${this.likesFromStore}`)
     
    }else{
      this.likesFromStore = parseInt(this.likesFromStore) - 1
      this.LocalStore.setToLocalStorage(`likes${this.index}`,`${this.likes}`)
    }
  
  }
}
