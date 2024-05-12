import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderReaderComponent } from './header-reader.component';

describe('HeaderReaderComponent', () => {
  let component: HeaderReaderComponent;
  let fixture: ComponentFixture<HeaderReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderReaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
