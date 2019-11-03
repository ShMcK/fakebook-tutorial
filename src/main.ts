import { ApolloServer } from 'apollo-server'
import typeDefs from './typeDefs'
import resolvers from './resolvers'

export const server = new ApolloServer({
	typeDefs,
	resolvers,
	playground: true,
})

server.listen(4000)