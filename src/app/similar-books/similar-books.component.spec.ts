import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarBooksComponent } from './similar-books.component';

describe('SimilarBooksComponent', () => {
  let component: SimilarBooksComponent;
  let fixture: ComponentFixture<SimilarBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimilarBooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimilarBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
