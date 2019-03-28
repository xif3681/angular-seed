import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthGuard } from '../auth/auth.guard'; // 路由守卫

const routes: Routes = [
  {
    path: '', component: HomeComponent, // 注意path: ''
    canActivate: [AuthGuard], // 路由守卫
    children: [
      { path: '', redirectTo: 'homepage', pathMatch: 'full' },
      { path: 'homepage', component: HomePageComponent },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' }, // 懒加载
      { path: 'manage', loadChildren: './manage/manage.module#ManageModule' }, // 懒加载
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
