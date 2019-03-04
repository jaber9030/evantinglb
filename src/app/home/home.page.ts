import { Component, OnInit } from '@angular/core';
import {RestService} from '../services/rest.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})


export class HomePage implements OnInit {
  latestPosts: any;
  constructor(private homeService: RestService) {
    homeService.getLatestPosts().subscribe(data  => this.latestPosts = data) ;
   }

  ngOnInit() {

  }

}
