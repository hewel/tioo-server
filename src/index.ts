import "dotenv/config";

import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { ApolloServer, Config } from "apollo-server-fastify";
import { ApolloServerPlugin } from "apollo-server-plugin-base";
import Fastify, { FastifyInstance } from "fastify";

import { WeatherAPI } from "./dataSources";
import { resolvers } from "./resolver";
import typeDefs from "./schema.graphql";

function fastifyAppClosePlugin(app: FastifyInstance): ApolloServerPlugin {
  return {
    async serverWillStart() {
      return {
        async drainServer() {
          await app.close();
        },
      };
    },
  };
}

async function startApolloServer() {
  const app = Fastify();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
      WeatherAPI: new WeatherAPI(),
    }),
    context: () => ({
      location: [116.46, 39.92],
    }),
    csrfPrevention: true,
    plugins: [
      fastifyAppClosePlugin(app),
      ApolloServerPluginDrainHttpServer({ httpServer: app.server }),
    ],
  });

  await server.start();
  app.register(server.createHandler());
  await app.listen(4000);
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer();
