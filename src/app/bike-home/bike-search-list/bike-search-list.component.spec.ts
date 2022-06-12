import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeSearchListComponent } from './bike-search-list.component';

describe('BikeSearchListComponent', () => {
  let component: BikeSearchListComponent;
  let fixture: ComponentFixture<BikeSearchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeSearchListComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BikeSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
