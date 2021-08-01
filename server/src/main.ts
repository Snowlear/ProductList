import productCardInfo from "./dummyData";
import typeDefs from "./typeDefs";

const { ApolloServer } = require('apollo-server');

const resolvers = {
    Query: {
        products: () => productCardInfo,
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }: { url: any }) => {
    console.log(`🚀  Server ready at ${url}`);
});