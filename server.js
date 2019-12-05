
const { ApolloServer, gql } = require('apollo-server'); 
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

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
}
`;


const books = [
    {
      title: 'Harry Potter and the Chamber of Secrets',
      authorid: 1,
    },
    {
      title: 'Jurassic Park',
      author: 2,
    },
  ];



  const authors = [
    {
        id: 1,
        name: 'J.K. Rowling',
        phone: 0732324
    },
    {
        id: 2,
        name: 'Michael Crichton',
        phone: 0732324
    },
  ];

  const resolvers = {
    Query: {
        getBooks: () => books,
        getAuthors: () => authors,
        getAuthor: ( _, { id }) => 
        {
            var auth = authors.find(author => author.id == id);
            var b = books.find(book => book.authorid == auth.id )
            return {auth,b};
        }
        
        
    },
  };



  // The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs,resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});