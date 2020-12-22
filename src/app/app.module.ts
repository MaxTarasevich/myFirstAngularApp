import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoriesComponent } from './stories/stories.component';
import { FeedComponent } from './feed/feed.component';
import { ActionComponent } from './action/action.component';
import { PostComponent } from './feed/post/post.component';
import { PostHeaderComponent } from './feed/post/post-header/post-header.component';
import { PostBodyComponent } from './feed/post/post-body/post-body.component';
import { PostFooterComponent } from './feed/post/post-footer/post-footer.component';



@NgModule({
  declarations: [
    AppComponent,
    StoriesComponent,
    FeedComponent,
    ActionComponent,
    PostComponent,
    PostHeaderComponent,
    PostBodyComponent,
    PostFooterComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
