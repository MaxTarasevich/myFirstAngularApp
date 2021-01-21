import { Component, OnInit } from '@angular/core';



import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  loginName!:any
  darkMode :boolean = false
  htmlCol:any

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.loginName = this.route.snapshot.url
  console.log(this.loginName)
  }
  darkModeToggle(){
    this.darkMode = !this.darkMode
    if(this.darkMode){
      document.querySelector(".container")?.classList.add('darkMode')
      document.querySelector('footer')!.classList.add('darkMode')
      this.htmlCol =  document.querySelectorAll('.card')
      for(let i = 0;i<this.htmlCol.length;i++){
        this.htmlCol[i]!.classList.add('bg-dark','text-white')
      }
     

    } else{
      document.querySelector(".container")?.classList.remove('darkMode')
      document.querySelector('footer')!.classList.remove('darkMode')
      for(let i = 0;i<this.htmlCol.length;i++){
        this.htmlCol[i]!.classList.remove('bg-dark','text-white')
      }
     
    }
    
  }
}
