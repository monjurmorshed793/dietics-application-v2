import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieticsManagerAppComponent } from './dietics-manager-app.component';

describe('DieticsManagerAppComponent', () => {
  let component: DieticsManagerAppComponent;
  let fixture: ComponentFixture<DieticsManagerAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DieticsManagerAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DieticsManagerAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
