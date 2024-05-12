import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageReaderComponent } from './home-page-reader.component';

describe('HomePageReaderComponent', () => {
  let component: HomePageReaderComponent;
  let fixture: ComponentFixture<HomePageReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePageReaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomePageReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
