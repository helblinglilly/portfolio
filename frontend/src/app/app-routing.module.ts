import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/admin/login/login.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'blog/:id', component: BlogDetailComponent },
  { path: 'projects/:id', component: ProjectDetailComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
