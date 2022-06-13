import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BikeDetailsModule } from '../bike-details.module';

import { BikeDetailsComponent } from './bike-details.component';
import { Bike, BikeDetails } from 'src/app/shared';
import { ActivatedRoute } from '@angular/router';

describe('BikeDetailsComponent', () => {
  let component: BikeDetailsComponent;
  let fixture: ComponentFixture<BikeDetailsComponent>;

  const data: BikeDetails = {
    bike: {
      "date_stolen":1654808400,
      "description":"The steel frame is glossy army green with light blue bands in the top, seat and down tube, but also in the fork. The bike was a bit more than 2 years older and in very good conditions. You can find additional information about the bike here (incl. pictures): You can find a picture of the bike at this website: https://www.thelightblue.co.uk/Sport/5LB9R2572G/Robinson-V2-105-R7000",
      "frame_colors":[
        "Green"
      ],
      "frame_model":"Reynolds 725 ",
      "id":1321642,
      "is_stock_img":false,
      "large_img":"https://files.bikeindex.org/uploads/Pu/590791/large_7F8046E2-D6DD-41F4-BDCD-2E82B857C9B4.jpg",
      "location_found":null,
      "manufacturer_name":"The Lightblue J.A. Townsend Cambridge",
      "external_id":null,
      "registry_name":null,
      "registry_url":null,
      "serial":"LBR11810079",
      "status":"stolen",
      "stolen":true,
      "stolen_location":"London, EC1R 4TY, GB",
      "thumb":"https://files.bikeindex.org/uploads/Pu/590791/small_7F8046E2-D6DD-41F4-BDCD-2E82B857C9B4.jpg",
      "title":"2020 The Lightblue J.A. Townsend Cambridge Reynolds 725",
      "url":"https://bikeindex.org/bikes/1321642",
      "year":2020,
      "registration_created_at":1655116454,
      "registration_updated_at":1655121767,
      "api_url":"https://bikeindex.org/api/v1/bikes/1321642",
      "manufacturer_id":100,
      "paint_description":null,
      "name":"Robinson V2 road bike",
      "frame_size":"m",
      "rear_tire_narrow":true,
      "front_tire_narrow":null,
      "type_of_cycle":"Bike",
      "test_bike":false,
      "rear_wheel_size_iso_bsd":null,
      "front_wheel_size_iso_bsd":null,
      "handlebar_type_slug":null,
      "frame_material_slug":"steel",
      "front_gear_type_slug":null,
      "rear_gear_type_slug":null,
      "additional_registration":"LBR11810079",
      "stolen_record":{
        "date_stolen":1655116931,
        "location":"GB",
        "latitude":null,
        "longitude":null,
        "theft_description":null,
        "locking_description":null,
        "lock_defeat_description":null,
        "police_report_number":null,
        "police_report_department":null,
        "created_at":1655116934,
        "create_open311":false,
        "id":125504
      },
      "public_images":[
        {
          "name":"2020 The Lightblue J.A. Townsend Cambridge Reynolds 725 Green",
          "full":"https://files.bikeindex.org/uploads/Pu/590791/7F8046E2-D6DD-41F4-BDCD-2E82B857C9B4.jpg",
          "large":"https://files.bikeindex.org/uploads/Pu/590791/large_7F8046E2-D6DD-41F4-BDCD-2E82B857C9B4.jpg",
          "medium":"https://files.bikeindex.org/uploads/Pu/590791/medium_7F8046E2-D6DD-41F4-BDCD-2E82B857C9B4.jpg",
          "thumb":"https://files.bikeindex.org/uploads/Pu/590791/small_7F8046E2-D6DD-41F4-BDCD-2E82B857C9B4.jpg",
          "id":590791
        }
      ],
      "components":[
      
      ]
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, BikeDetailsModule, RouterTestingModule ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: {
                bikeDetails: data
              },
              queryParams: {
                bikeId: 123123
              }
            }
          }
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BikeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
