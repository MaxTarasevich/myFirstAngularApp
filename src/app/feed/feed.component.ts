import { Component, OnInit } from '@angular/core';
import {ImageGetService} from '../image-get.service';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {



public loading:boolean = true

  
  
  constructor(public images:ImageGetService) { }

  ngOnInit(): void {
    this.images.getImage().subscribe(()=>{
      this.loading = false
      this.images.imagesArr.length = 10
    })
   
  }
  

}
