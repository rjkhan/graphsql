

const { ApolloServer } = require("apollo-server");
const typeDefs = require('./scheme');
const resolvers = require("./resolver");
const mysql = require("mysql");

const db = require("./database_config/db_config.js");

//var dbCon = new db("project","root","root","Rabnawazs-MacBook-Pro.local",mysql);
//dbCon.create_connection();

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});