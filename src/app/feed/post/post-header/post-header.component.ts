import { Component, Input, OnInit } from '@angular/core';
import {ImageGetService} from '../../../image-get.service'

@Component({
  selector: 'app-post-header',
  templateUrl: './post-header.component.html',
  styleUrls: ['./post-header.component.scss']
})
export class PostHeaderComponent implements OnInit {

  @Input() titleHeader: any;
  @Input() urlHeader: any;

  
 respons!:any
  
  constructor(private images:ImageGetService) { }

  ngOnInit(): void {
 this.images.getImage().subscribe((respons)=>{this.respons = respons
  console.log('shdfjdhsfjhsdjfhdjsfhsdjf',this.respons[0].url)
    })
  
  }

}
