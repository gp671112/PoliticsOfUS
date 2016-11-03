import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    MainComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'main', component: MainComponent },
      { path: 'about', component: AboutComponent },
      { path: '', component: MainComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
