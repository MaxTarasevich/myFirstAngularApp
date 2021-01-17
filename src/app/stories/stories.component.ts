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
    console.log(this.darkMode)
    if(this.darkMode){
      document.querySelector("body")?.classList.add('darkMode')
    } else{
      document.querySelector("body")?.classList.remove('darkMode')
    }
    
  }
}
