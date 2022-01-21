import { ThemeService } from './services/theme.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { PostsComponent } from './components/posts/posts.component';
import { LoginComponent } from './components/admin/login/login.component';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    BlogDetailComponent,
    ProjectsComponent,
    ProjectDetailComponent,
    PostsComponent,
    LoginComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'blog',
        component: BlogComponent,
      },
      {
        path: 'projects',
        component: ProjectsComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
    ]),
  ],
  providers: [ThemeService, CookieService, FormBuilder],
  bootstrap: [AppComponent],
})
export class AppModule {}
