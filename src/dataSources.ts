import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";
import { pipe } from "fp-ts/lib/function";
import * as O from "fp-ts/Option";
import urlcat from "urlcat";
import { Location } from "./resolver/types";

const API_TOKEN = process.env["TOKEN"];

export class WeatherAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.caiyunapp.com/v2.6/:token/:location";
  }

  resolveURL(request: RequestOptions) {
    const parserUrl =
      (baseUrl: string) => (token: string) => (location: Location) =>
        urlcat(baseUrl, { token, location: location.join(",") });

    pipe(
      O.some(parserUrl),
      O.ap(O.fromNullable(this.baseURL)),
      O.ap(O.fromNullable(API_TOKEN)),
      O.ap(O.fromNullable(this.context.location)),
      O.map(url => (this.baseURL = url)),
    );

    return super.resolveURL(request);
  }

  async getRealtime() {
    return this.get("realtime");
  }
}
