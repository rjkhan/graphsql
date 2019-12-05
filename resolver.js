const resolvers = {
    Query: {
        getBooks: () => books,
        getAuthors: () => authors,
        getAuthor: ( _, { id } ) => 
        {
            return authors.find(author => author.id == id);
        },
        getBookByAuthorId: (_, {id}) => {
  
          return books.find(book => book.authorid == id);
        }
        
        
    },
  };


module.exports = resolvers;