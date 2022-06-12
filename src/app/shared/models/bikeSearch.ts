import {Bike} from "./bike";

export interface BikeSearchResponse {
  bikes: Bike[]
}

export interface BikeSearchRequest {
  page?: number;
  per_page?: number;
  location?: string;
  distance?: string;
  stolenness?: "proximity";
}