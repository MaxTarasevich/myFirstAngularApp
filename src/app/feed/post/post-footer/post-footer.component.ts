import { Component, Input, OnInit } from '@angular/core';
import {PostsService} from '../../../posts.service';
import {ToLocalStorageService} from '../../../to-local-storage.service'

@Component({
  selector: 'app-post-footer',
  templateUrl: './post-footer.component.html',
  styleUrls: ['./post-footer.component.scss']
})
export class PostFooterComponent implements OnInit {



  @Input() index:any

showComment = false
showModal = false
commentFooter:any
id:number = 1000
str:any
 
  constructor(private posts:PostsService,
    private localStore:ToLocalStorageService) { }

  ngOnInit(): void {
    if(this.localStore.getFromLocalStorage((this.index+1).toString())){
  this.str = this.localStore.getFromLocalStorage((this.index+1).toString())
  this.commentFooter = JSON.parse(this.str)
    }else{
      this.posts.getComments().subscribe(()=>{
        this.commentFooter = this.posts.commentsArr.filter((filt)=>filt.userId == this.index +1)
        this.localStore.setToLocalStorage((this.index+1).toString(),JSON.stringify(this.commentFooter))
      })
    }

  
  }

  hideComment(){
this.showComment = !this.showComment
  }

  comment(object:object){
  
    this.commentFooter.push(object)
    this.localStore.setToLocalStorage((this.index+1).toString(),JSON.stringify(this.commentFooter))
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
