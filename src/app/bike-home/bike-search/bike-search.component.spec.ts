import { BikeHomeModule } from './../bike-home.module';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeSearchComponent } from './bike-search.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('BikeSearchComponent', () => {
  let component: BikeSearchComponent;
  let fixture: ComponentFixture<BikeSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, BikeHomeModule, RouterTestingModule ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BikeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
