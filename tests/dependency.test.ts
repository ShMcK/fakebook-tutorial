import packaged from './utils/packaged'

describe('Dependency', () => {
	test.skip('"apollo-server" is not installed', async () => {
		const isInstalled = await packaged({
			name: 'apollo-server',
			type: 'dependency'
		})
		expect(isInstalled).toBe(true)
	})

	test.skip('"graphql" is not installed', async () => {
		const isInstalled = await packaged({
			name: 'graphql',
			type: 'dependency'
		})
		expect(isInstalled).toBe(true)
	})

	test('"graphql-iso-date" is installed', async () => {
		const isInstalled = await packaged({
			name: 'graphql-iso-date',
			type: 'dependency'
		})
		expect(isInstalled).toBe(true)
	})
})