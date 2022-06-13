import { BikeListData } from './bike-list-data';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BikeHomeModule } from '../bike-home.module';

import { BikeSearchListComponent } from './bike-search-list.component';

describe('BikeSearchListComponent', () => {
  let component: BikeSearchListComponent;
  let fixture: ComponentFixture<BikeSearchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, BikeHomeModule, RouterTestingModule ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BikeSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const data: BikeListData = {
      id: 32423,
      year: 2342
    }
    component.bikeData = data;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
