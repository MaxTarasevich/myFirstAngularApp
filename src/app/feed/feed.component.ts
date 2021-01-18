import { Component, OnInit } from '@angular/core';
import {ImageGetService} from '../image-get.service';
import {ToLocalStorageService} from '../to-local-storage.service'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {



public loading:boolean = true
imagesArr!:any
str:any

  
  
  constructor(public images:ImageGetService, public LocStore:ToLocalStorageService) { }

  ngOnInit(): void {
    if(this.LocStore.getFromLocalStorage(`images`)){
      this.str = this.LocStore.getFromLocalStorage(`images`)
      this.imagesArr = JSON.parse(this.str)
      this.loading = false
    }else{
    this.images.getImage().subscribe(()=>{
      this.loading = false
      this.imagesArr = this.images.imagesArr
    this.LocStore.setToLocalStorage(`images`,JSON.stringify(this.imagesArr))
    })
   
      
    }

  }
  

}
