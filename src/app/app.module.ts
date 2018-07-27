import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SerachComponent } from './serach/serach.component';

import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { SposifyService } from './sposify.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '', redirectTo: 'search', pathMatch: 'full'
  },
  {
    path: 'search', component: SerachComponent
  },
  {
    path: 'detail/:id', component: DetailComponent
  },
  {
    path: '**', redirectTo: 'search'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SerachComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule
  ],
  providers: [
    SposifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
