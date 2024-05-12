import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookPageComponent } from './book-page/book-page.component';
import { BooksPageComponent } from './books-page/books-page.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'home-page', component:HomeComponent},
  {path:'search/:searchTerm', component:BooksPageComponent},
  {path:'books-page/tag/:tag', component:BooksPageComponent},
  {path:'book/:id', component:BookPageComponent},
  {path:'books-page',component:BooksPageComponent},
  {path: 'auth/login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
