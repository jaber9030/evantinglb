import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router} from '@angular/router';
@Component({
  selector: 'app-init',
  templateUrl: './init.page.html',
  styleUrls: ['./init.page.scss'],
})
export class InitPage implements OnInit {
  logoSrc: any =  '../../assets/logo.png';
  constructor(private router: Router) {

  }

  ngOnInit() {

  }

  signIn() {}

  browse() {
    this.router.navigate(['tabs/home']);
  }

}
