import GQLTester from 'easygraphql-tester'
import typeDefs from '../src/typeDefs'
import resolvers from '../src/resolvers'

describe('Resolvers', () => {
  let tester

  beforeAll(() => {
    tester = new GQLTester(typeDefs, resolvers)
  })

  test('should handle viewer', async () => {
	  const query = `
			{
				viewer {
					id
					firstName
					lastName
				}
			}
		`
    // First arg: false, there is no invalidField on the schema.
    const result = await tester.graphql(query)
    const {viewer} = result.data
    expect(viewer.id).toBe('1')
    expect(typeof viewer.firstName).toBe('string')
    expect(typeof viewer.lastName).toBe('string')
  })
})
