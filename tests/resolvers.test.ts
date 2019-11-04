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

	test('should handle user friends', async () => {
		const query = `
			{
				viewer {
					id
					firstName
					lastName
					friends {
						id
						firstName
						lastName
					}
				}
			}
		`
		 // First arg: false, there is no invalidField on the schema.
    const result = await tester.graphql(query)
    const {viewer} = result.data
    expect(viewer.friends).toHaveLength
		// test a single friend
		const aFriend = viewer.friends[0]
    expect(typeof aFriend.firstName).toBe('string')
    expect(typeof aFriend.lastName).toBe('string')
	})
})
