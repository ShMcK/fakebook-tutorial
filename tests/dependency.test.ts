import packaged from './utils/packaged'

describe('Dependency', () => {
	test('"apollo-server" is not installed', async () => {
		const isInstalled = await packaged({
			name: 'apollo-server',
			type: 'dependency'
		})
		expect(isInstalled).toBe(true)
	})

	test('"graphql" is not installed', async () => {
		const isInstalled = await packaged({
			name: 'graphql',
			type: 'dependency'
		})
		expect(isInstalled).toBe(true)
	})
})