import { ApolloServer } from 'apollo-server'
import { server } from '../src/main'

describe('Apollo Server', () => {
	afterAll(() => {
		// @ts-ignore // accessing private internals
		if (server.httpServer) {
			// close the port connection to avoid 
			// "port in use" errors on retries
			// @ts-ignore // accessing private internals
			server.httpServer.close()
		}
	})

	test('should be created', () => {
		expect(server).toBeDefined()
		expect(server).toBeInstanceOf(ApolloServer)
	})

	test('starts Express server', () => {
		// ApolloServer attaches an Express
		// httpServer when "listen" is called. 
		// @ts-ignore // accessing private internals
		expect(server.httpServer).toBeDefined()
	})

})