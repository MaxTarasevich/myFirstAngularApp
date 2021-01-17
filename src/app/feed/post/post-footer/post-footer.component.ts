import { Component, Input, OnInit } from '@angular/core';
import {PostsService} from '../../../posts.service'

@Component({
  selector: 'app-post-footer',
  templateUrl: './post-footer.component.html',
  styleUrls: ['./post-footer.component.scss']
})
export class PostFooterComponent implements OnInit {

showComment = true
showModal = false

@Input() index:any
 

commentFooter:any
 
  constructor(private posts:PostsService) { }

  ngOnInit(): void {
  this.posts.getComments().subscribe((resp)=>{
    this.commentFooter = resp
    
  })
  console.log(this.index)
  
  
  }

  hideComment(){
this.showComment = !this.showComment
  }

  comment(object:object){
    console.log('From parrent',object)
    this.commentFooter.push(object)
  }


toggleModal(){
  this.showModal = !this.showModal
  if(this.showModal){
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = 17 + 'px'
  } else {
    document.body.style.overflow = ''
    document.body.style.paddingRight = ''

  } 
}

}
