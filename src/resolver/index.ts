import { Resolvers } from "./types";

export const resolvers: Resolvers = {
  Query: {
    getRealtime: (_, __, { dataSources }) =>
      dataSources.WeatherAPI.getRealtime(),
  },
};
