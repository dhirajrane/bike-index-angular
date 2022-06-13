import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BikeHomeModule } from '../bike-home.module';

import { BikeSearchInputComponent } from './bike-search-input.component';

describe('BikeSearchInputComponent', () => {
  let component: BikeSearchInputComponent;
  let fixture: ComponentFixture<BikeSearchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, BikeHomeModule, RouterTestingModule ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BikeSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
