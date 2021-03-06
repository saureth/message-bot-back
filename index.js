import { ApolloServer } from "apollo-server";
import typeDefs from "./src/typedefs/index.js";
import resolvers from "./src/resolvers/index.js";
import connectDB from "./src/config/config.js";

connectDB();
const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});