import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookPageComponent } from './book-page/book-page.component';
import { BooksPageComponent } from './books-page/books-page.component';
import { DbAdderComponent } from './db-adder/db-adder.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { HeaderReaderComponent } from './header-reader/header-reader.component';
import { HomePageAdminComponent } from './home-page-admin/home-page-admin.component';
import { HomePageReaderComponent } from './home-page-reader/home-page-reader.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'home-page', component:HomeComponent},
  {path:'search/:searchTerm', component:BooksPageComponent},
  {path:'books-page/tag/:tag', component:BooksPageComponent},
  {path:'book/:id', component:BookPageComponent},
  {path:'books-page',component:BooksPageComponent},
  {path:'db-adder',component:DbAdderComponent},
  {path:'home-page-reader',component:HomePageReaderComponent},
  {path:'home-page-admin',component:HomePageAdminComponent},
  {path: 'auth/login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
