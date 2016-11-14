import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MainService } from './main/main.service';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { MainDetailComponent } from './main/main-detail/main-detail.component';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        AboutComponent,
        MainComponent,
        AboutComponent,
        MainDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {
                path: 'main', component: MainComponent, children: [
                    { path: '', redirectTo: '眾議院' },
                    { path: ':name', component: MainDetailComponent }
                ]
            },
            { path: 'about', component: AboutComponent },
            { path: '', redirectTo: 'main', pathMatch: 'full' }
        ])
    ],
    providers: [MainService],
    bootstrap: [AppComponent],
})
export class AppModule { }
