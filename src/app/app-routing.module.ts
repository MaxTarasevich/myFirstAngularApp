import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { PostComponent } from './feed/post/post.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegestryFormComponent } from './regestry-form/regestry-form.component';

const routes: Routes = [
  {path:'',component:RegestryFormComponent},
  {path:'login/:loginName',component:FeedComponent},
  {path:'feed/:id',component:FeedComponent},
 

  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
