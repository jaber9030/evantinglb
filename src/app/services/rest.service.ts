import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppConstants} from '../app.constants';
import { Observable} from 'rxjs';
import { PostModel } from '../models/post.model';
@Injectable({
  providedIn: 'root'
})
export class RestService {
  action: string;
  baseUrl: string;
  params: string;

  constructor(private  client: HttpClient) {
    this.action = 'posts';

    this.baseUrl = AppConstants.baseURL ;
  }


  public getLatestPosts(): Observable<PostModel[]> {
    this.action = 'latest-posts/';
    this.params = '309';
    return this.client.get<PostModel[]>(this.baseUrl + this.action + this.params);
  }

  public getTrendingPosts(): Observable<PostModel[]> {
    this.action = 'trending-posts';
    return this.client.get<PostModel[]>(this.baseUrl + this.action);
  }

}
