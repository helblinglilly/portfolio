import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Post {
  id: number;
  title: string;
  body: string;
  mediafolder: string;
  timestamp: number;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiServer = 'http://localhost:10000/api';

  constructor(private http: HttpClient) {}

  public getAllPosts() {
    return this.http.get<Post>(this.apiServer + '/posts');
  }

  public getAllProjects() {
    return this.http.get<Post>(this.apiServer + '/projects');
  }

  public getProject(id: string) {
    return this.http.get<Post>(this.apiServer + `/projects/${id}`);
  }

  public getAllBlogs() {
    return this.http.get<Post>(this.apiServer + '/blogs');
  }

  public getBlog(id: string) {
    return this.http.get<Post>(this.apiServer + `/blogs/${id}`);
  }

  private credentials = {};

  public login(username: string, password: string) {
    const credentials = { username: username, password: password };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    this.http
      .post(this.apiServer + `/login`, credentials, {
        headers: headers,
      })
      .subscribe((token) => {
        console.log(token);
      });
    console.log('executed');
  }

  public formatTime(timestamp: Number): string {
    const time = timestamp.toString();
    const minute = time.substring(10, 12);
    const hour = time.substring(8, 10);
    const day = time.substring(6, 8);
    const month = time.substring(4, 6);
    const year = time.substring(2, 4);
    return `Posted: ${day}/${month}/${year} ${hour}:${minute}`;
  }
}
