const { gql } = require("apollo-server");


const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
type Book {
    id: ID!
    title: String
    author: Author
}

type Author {
    id: ID!
    name: String,
    phone: Int,
    books: [Book]
}

type Query {
  getBooks: [Book]
  getAuthors: [Author]
  getAuthor(id: ID!): Author
  getBookByAuthorId(id: ID!): Book
}
`;
module.exports = typeDefs;