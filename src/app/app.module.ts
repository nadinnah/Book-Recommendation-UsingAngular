import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { TagsComponent } from './tags/tags.component';
import { BookPageComponent } from './book-page/book-page.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BooksPageComponent } from './books-page/books-page.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { HeaderReaderComponent } from './header-reader/header-reader.component';
import { HomePageAdminComponent } from './home-page-admin/home-page-admin.component';
import { HomePageReaderComponent } from './home-page-reader/home-page-reader.component';
import { DbAdderComponent } from './db-adder/db-adder.component';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { DbRemoverComponent } from './db-remover/db-remover.component';
import { BannersComponent } from './banners/banners.component';
import {MatTableModule} from '@angular/material/table';
import { GenrePanelComponent } from './genre-panel/genre-panel.component';
import { NextDirective } from './next.directive';
import { PrevDirective } from './prev.directive';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { SimilarBooksComponent } from './similar-books/similar-books.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    FooterComponent,
    TagsComponent,
    BookPageComponent,
    BooksPageComponent,
    ImageSliderComponent,
    HeaderAdminComponent,
    HeaderReaderComponent,
    HomePageAdminComponent,
    HomePageReaderComponent,
    DbAdderComponent,
    DbRemoverComponent,
    BannersComponent,
    GenrePanelComponent,
    NextDirective,
    PrevDirective,
    ProfilePageComponent,
    StarRatingComponent,
    AdvancedSearchComponent,
    SimilarBooksComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    FontAwesomeModule,
    MatFormFieldModule,MatCardModule,MatInputModule,MatButtonModule,MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatTableModule,
    
  ],
  providers: [
    provideAnimationsAsync('noop')
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
