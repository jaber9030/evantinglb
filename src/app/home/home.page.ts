import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  providers: [RestService]
})


export class HomePage implements OnInit {
  latestPosts: any;
  trendingPosts: any;
  loading: boolean;
  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };
  constructor(private homeService: RestService, public loadingController: LoadingController) {
    this.loading = true;
    this.homeService.getLatestPosts().subscribe(data => {
    this.latestPosts = data;
      this.homeService.getTrendingPosts().subscribe(data1 => {this.trendingPosts = data1;
        this.loading = false;
      } );
    });
  }

  ngOnInit() {

  }



}
