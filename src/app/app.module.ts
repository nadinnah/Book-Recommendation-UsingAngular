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
    HomePageReaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    FontAwesomeModule,
  ],
  providers: [
    provideAnimationsAsync('noop')
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
