import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ContentfulOneEntryComponent } from './shared/one-entry/contentful-one-entry.component';
import { ContentfulService } from "app/services/contentful.service";
import { RouterModule, Router, Routes } from '@angular/router';

import { ListPostComponent } from './pages/list-post/list-post.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';

const appRoutes: Routes = [
{ path: 'posts', component: ListPostComponent },
{ path: 'entry/:id', component: SinglePostComponent },
{ path: 'about', redirectTo: '/about' },
{ path: '',
redirectTo: '/posts',
pathMatch: 'full'
}
];

@NgModule({
  declarations: [
    AppComponent,
    ContentfulOneEntryComponent,
    ListPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule { }
