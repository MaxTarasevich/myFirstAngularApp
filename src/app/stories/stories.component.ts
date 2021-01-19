import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
 
  darkMode :boolean = false

  constructor() { }

  ngOnInit(): void {
  
  }
  darkModeToggle(){
    this.darkMode = !this.darkMode
    if(this.darkMode){
      document.querySelector(".container")?.classList.add('darkMode')
      document.querySelector('footer')!.classList.add('darkMode')
    } else{
      document.querySelector(".container")?.classList.remove('darkMode')
      document.querySelector('footer')!.classList.remove('darkMode')
    }
    
  }
}
