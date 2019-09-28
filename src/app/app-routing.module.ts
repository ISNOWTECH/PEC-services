import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'landinga', loadChildren: './landinga/landinga.module#LandingaPageModule' },
  { path: 'landingb', loadChildren: './landingb/landingb.module#LandingbPageModule' },
  { path: 'landingc', loadChildren: './landingc/landingc.module#LandingcPageModule' },
  { path: 'splash', loadChildren: './splash/splash.module#SplashPageModule' },
  { path: 'main', loadChildren: './main/main.module#MainPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'pickme', loadChildren: './pickme/pickme.module#PickmePageModule' },
  { path: 'date', loadChildren: './date/date.module#DatePageModule' },
  { path: 'danger', loadChildren: './danger/danger.module#DangerPageModule' },
  { path: 'init-date', loadChildren: './init-date/init-date.module#InitDatePageModule' },
  { path: 'date-list', loadChildren: './date-list/date-list.module#DateListPageModule' },
  { path: 'date-doctor', loadChildren: './date-doctor/date-doctor.module#DateDoctorPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'consult', loadChildren: './consult/consult.module#ConsultPageModule' },
  { path: 'docs', loadChildren: './docs/docs.module#DocsPageModule' },
  { path: 'help', loadChildren: './help/help.module#HelpPageModule' },
  { path: 'pay', loadChildren: './pay/pay.module#PayPageModule' },
  { path: 'map', loadChildren: './map/map.module#MapPageModule' },
  { path: 'pick-doc', loadChildren: './pick-doc/pick-doc.module#PickDocPageModule' },
  { path: 'pick-map', loadChildren: './pick-map/pick-map.module#PickMapPageModule' },
  { path: 'end', loadChildren: './end/end.module#EndPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
