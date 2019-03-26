import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from './auth/can-deactivate.guard';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service'; // 自定义预加载
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' }, // 懒加载
  { path: 'home', loadChildren: './home/home.module#HomeModule', data: { preload: true } }, // 懒加载 + 自定义预加载
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        preloadingStrategy: SelectivePreloadingStrategyService //  自定义预加载
        // 要为所有惰性加载模块启用预加载功能，请从 Angular 的路由模块中导入 PreloadAllModules
        // preloadingStrategy: PreloadAllModules
        // Router 预加载器立即加载所有惰性加载路由

      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard,
    SelectivePreloadingStrategyService
  ]
})
export class AppRoutingModule { }


/*

Copyright(c): 2018 深圳创新设计研究院
Author: luo.shuqi@live.com
@file: app-routing.module.ts
@time: 2018 / 7 / 2 17: 18

*/

