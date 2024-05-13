import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbRemoverComponent } from './db-remover.component';

describe('DbRemoverComponent', () => {
  let component: DbRemoverComponent;
  let fixture: ComponentFixture<DbRemoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DbRemoverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DbRemoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
