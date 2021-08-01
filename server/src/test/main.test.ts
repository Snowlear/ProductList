
import productCardInfo from '../dummyData';
import typeDefs from ".././typeDefs";
import { makeExecutableSchema } from 'graphql-tools';
import { graphql } from 'graphql';

const resolvers = {
    Query: {
        products: () => productCardInfo,
    }
};

const query = `
            { products {
                id
                product_name
                price
                shipment
                photo_url
                isLiked
            } }
        `;

describe('Test Cases', () => {
    const schema = makeExecutableSchema({ typeDefs, resolvers })
    const context = productCardInfo;
    const variables = {};

    test(`Query retrieval test`, async () => {
        const result = await graphql(schema, query, null, context, variables)
        return expect(result).toEqual({"data": {"products" : productCardInfo}})
    });
})