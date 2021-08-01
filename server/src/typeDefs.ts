import { gql } from "apollo-server";

const typeDefs = gql`
    type Product {
        id: Int!
        product_name: String
        price: Int!
        shipment: String
        photo_url: String
        isLiked: Boolean
    }
    type Query {
        products: [Product]
    }
`;

export default typeDefs;