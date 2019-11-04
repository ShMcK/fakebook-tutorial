import GQLTester from 'easygraphql-tester'
import typeDefs from '../src/typeDefs'

describe('TypeDefs', () => {
	let tester

	beforeAll(() => {
		tester = new GQLTester(typeDefs)
	})

	test('should validate Viewer', () => {
		const validQuery = `
			{
				viewer {
					id
					firstName
					lastName
				}
			}
		`
		tester.test(true, validQuery)
	})
})