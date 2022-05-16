export interface BaseResponse {
  status: string;
  api_version: string;
  api_status: string;
  lang: string;
  unit: string;
  tzshift: number;
  timezone: string;
  server_time: number;
  location?: number[];
}
export interface RealtimeResponse extends BaseResponse {
  result: {
    realtime: Realtime;
    primary: number;
  };
}

export interface Realtime {
  status: string;
  temperature: number;
  humidity: number;
  cloudrate: number;
  skycon: string;
  visibility: number;
  dswrf: number;
  wind: Wind;
  pressure: number;
  apparent_temperature: number;
  precipitation: Precipitation;
  air_quality: AirQuality;
  life_index: LifeIndex;
}
export interface Wind {
  speed: number;
  direction: number;
}
export interface Precipitation {
  local: Local;
  nearest: Nearest;
}
export interface Local {
  status: string;
  datasource: string;
  intensity: number;
}
export interface Nearest {
  status: string;
  distance: number;
  intensity: number;
}
export interface AirQuality {
  pm25: number;
  pm10: number;
  o3: number;
  so2: number;
  no2: number;
  co: number;
  aqi: Aqi;
  description: Description;
}
export interface Aqi {
  chn: number;
  usa: number;
}
export interface Description {
  chn: string;
  usa: string;
}
export interface LifeIndex {
  ultraviolet: UltravioletOrComfort;
  comfort: UltravioletOrComfort;
}
export interface UltravioletOrComfort {
  index: number;
  desc: string;
}
