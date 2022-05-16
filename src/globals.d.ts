declare module "*.graphql" {
  import { DocumentNode } from "graphql";
  const typeDefs: DocumentNode;
  export default typeDefs;
}
declare module "*.gql" {
  import { DocumentNode } from "graphql";
  const typeDefs: DocumentNode;
  export default typeDefs;
}
