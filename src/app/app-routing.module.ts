import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'sports', loadChildren: './sports/sports.module#SportsPageModule' },
  { path: 'fashion', loadChildren: './fashion/fashion.module#FashionPageModule' },
  { path: 'exhibitions-conferences', loadChildren: './exhibitions-conferences/exhibitions-conferences.module#ExhibitionsConferencesPageModule' },
  { path: 'nightlife', loadChildren: './nightlife/nightlife.module#NightlifePageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
