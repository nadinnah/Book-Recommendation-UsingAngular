import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbAdderComponent } from './db-adder.component';

describe('DbAdderComponent', () => {
  let component: DbAdderComponent;
  let fixture: ComponentFixture<DbAdderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DbAdderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DbAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
