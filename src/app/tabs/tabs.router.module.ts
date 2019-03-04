import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'sports',
        children: [
          {
            path: '',
            loadChildren: '../sports/sports.module#SportsPageModule'
          }
        ]
      },
      {
        path: 'fashion',
        children: [
          {
            path: '',
            loadChildren: '../fashion/fashion.module#FashionPageModule'
          }
        ]
      },
      {
        path: 'nightlife',
        children: [
          {
            path: '',
            loadChildren: '../nightlife/nightlife.module#NightlifePageModule'
          }
        ]
      },
      {
        path: 'exhibitions-conferences',
        children: [
          {
            path: '',
            loadChildren: '../exhibitions-conferences/exhibitions-conferences.module#ExhibitionsConferencesPageModule'
          }
        ]
      },
      {
        path: 'contact',
        children: [
          {
            path: '',
            loadChildren: '../contact/contact.module#ContactPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/init',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
