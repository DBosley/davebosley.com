import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './home.routes';
import { HomeComponent } from './home.component';

console.debug('`Home` bundle loaded asynchronously');

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    HomeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class HomeModule {
  public static routes = routes;
}