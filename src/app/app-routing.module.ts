import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookPageComponent } from './book-page/book-page.component';
import { BooksPageComponent } from './books-page/books-page.component';
import { DbAdderComponent } from './db-adder/db-adder.component';
import { HomePageAdminComponent } from './home-page-admin/home-page-admin.component';
import { HomePageReaderComponent } from './home-page-reader/home-page-reader.component';
import { LoginComponent } from './auth/login/login.component';
import { DbRemoverComponent } from './db-remover/db-remover.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path:'home-page', component:HomeComponent},
  {path:'search/:searchTerm', component:BooksPageComponent},
  {path:'tag/:tag', component:BookPageComponent},
  {path:'book-page-number/:id', component:BookPageComponent},
  {path:'books-page',component:BooksPageComponent},
  {path:'advanced-search',component:AdvancedSearchComponent},
  {path:'profile-page',component:ProfilePageComponent},
  {path:'db-adder',component:DbAdderComponent},
  {path:'db-remover',component:DbRemoverComponent},
  {path:'home-page-reader',component:HomePageReaderComponent, data:{role: 'reader'}},
  {path:'home-page-admin',component:HomePageAdminComponent, data:{role: 'admin'}},
  {path:'auth/login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
