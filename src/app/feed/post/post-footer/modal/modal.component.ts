import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

@Input() index:any
@Input() id:any
@Output() modalClose = new EventEmitter()
@Output() comment = new EventEmitter<object>()

autor!:string
text!:string
newComment!:object

  constructor() { }

  ngOnInit(): void {
  }


  sendData(object:object){
   this.comment.emit(object)
  }

  modalFunc(){
    this.newComment = {
      userId: this.index,
      id: this.id,
      title:this.autor,
      body:this.text,
    }

    this.modalClose.emit();

    if(this.autor && this.comment)
    this.sendData(this.newComment)
  }

}
