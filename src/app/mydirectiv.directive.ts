import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMydirectiv]'
})
export class MydirectivDirective {

@HostListener('click')
  public onClick(event :any):void{
    if(this.el.nativeElement.localName === 'img'){
     let styledEl = this.el.nativeElement.style
     if(styledEl.position != 'fixed'){
      styledEl.position = 'fixed'
      styledEl.top = '0px'
      styledEl.left = '0px'
      styledEl.width = '100vw'
      styledEl.height = '100vh'
      styledEl.zIndex = '4'
      document.querySelector('body')!.style.overflow = 'hidden'
     }else{
      styledEl.position = ''
      styledEl.top = ''
      styledEl.left = ''
      styledEl.width = ''
      styledEl.height = ''
      styledEl.zIndex = ''
      document.querySelector('body')!.style.overflow = ''
     }
    
      
    }else if(this.el.nativeElement.classList.contains('likes')){
      if(this.el.nativeElement.classList.contains('liked')){
        this.el.nativeElement.classList.remove('liked')
       }else this.el.nativeElement.classList.add('liked')
     
    
    }else this.el.nativeElement.style.color = 'red';
    
  }



  constructor(private el: ElementRef) {
    this.el.nativeElement.style.transition = '300ms liner';
   }

}
