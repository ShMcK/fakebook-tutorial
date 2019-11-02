import { ApolloServer } from 'apollo-server'
import { server } from '../src/main'

describe('Apollo Server', () => {
	test('should be created', () => {
		expect(server).toBeDefined()
		expect(server).toBeInstanceOf(ApolloServer)
	})
})