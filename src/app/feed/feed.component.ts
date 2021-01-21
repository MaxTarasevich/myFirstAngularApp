import { Component, OnInit } from '@angular/core';
import {ImageGetService} from '../image-get.service';
import {ToLocalStorageService} from '../to-local-storage.service';


import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {



public loading:boolean = true
imagesArr!:any
str:any
routerUrl:any

  
  
  constructor(public images:ImageGetService, public LocStore:ToLocalStorageService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.routerUrl = this.route.snapshot.params['id']
  

    if(this.LocStore.getFromLocalStorage(`images`)){
      this.str = this.LocStore.getFromLocalStorage(`images`)
      this.imagesArr = JSON.parse(this.str)
      if(this.routerUrl){
        this.imagesArr= this.imagesArr.slice(parseInt(this.routerUrl),parseInt(this.routerUrl)+1)
      }
      this.loading = false
    }else{
    this.images.getImage().subscribe(()=>{
      this.loading = false
      this.imagesArr = this.images.imagesArr
    this.LocStore.setToLocalStorage(`images`,JSON.stringify(this.imagesArr))

    if(this.routerUrl){
      this.imagesArr= this.imagesArr.slice(parseInt(this.routerUrl),parseInt(this.routerUrl)+1)
    }
    })
   
      
    }

  }
  

}
