import { Component, Input, OnInit } from '@angular/core';
import {ImageGetService} from '../../../image-get.service'

@Component({
  selector: 'app-post-body',
  templateUrl: './post-body.component.html',
  styleUrls: ['./post-body.component.scss']
})
export class PostBodyComponent implements OnInit {

 respons!:any

  @Input() likes:any
  
  constructor(private images:ImageGetService) { }

  ngOnInit(): void {
 this.images.getImage().subscribe((respons)=>{this.respons = respons
  console.log('shdfjdhsfjhsdjfhdjsfhsdjf',this.respons[0].url)
    })
  
  }

}
