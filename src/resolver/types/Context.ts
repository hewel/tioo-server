import { WeatherAPI } from "@/dataSources";
import { Location } from ".";

export interface Context {
  location: Location;
  dataSources: {
    WeatherAPI: WeatherAPI;
  };
}
