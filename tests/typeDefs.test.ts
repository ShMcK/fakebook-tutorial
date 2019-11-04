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

	test('should add User friends', () => {
		const validQuery = `
			{
				viewer {
					id
					firstName
					lastName
					friends {
						id
					}
				}
			}
		`
		tester.test(true, validQuery)
	})

	test('should add User feed', () => {
		const validQuery = `
			{
				viewer {
					id
					firstName
					lastName
					feed {
						id
						createdAt
						content
					}
				}
			}
		`
		tester.test(true, validQuery)
	})

	test('should add Message user', () => {
		const validQuery = `
			{
				viewer {
					id
					feed {
						id
						user {
							id
						}
					}
				}
			}
		`
		tester.test(true, validQuery)
	})

	test('should add user query', () => {
		const validQuery = `
			{
				user(id: "2") {
					id
					firstName
					lastName
				}
			}
		`
		tester.test(true, validQuery)
	})

	test('should include DateTime scalar', () => {
		// @ts-ignore accessing internals
		const scalarTypeDefs = typeDefs.definitions.filter(td => td.kind === 'ScalarTypeDefinition')
		// @ts-ignore accessing internals
		const hasDateTimeScalar = scalarTypeDefs.some(td => td.name.value === 'DateTime')
		expect(hasDateTimeScalar).toBe(true)
	})
})