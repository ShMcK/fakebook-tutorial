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

	test('should handle user feed', async() => {
		const query = `
			{
				viewer {
					id
					feed {
						id
						createdAt
						content
					}
				}
			}
		`
	 // First arg: false, there is no invalidField on the schema.
    const result = await tester.graphql(query)
    const {viewer} = result.data
    expect(viewer.feed).toHaveLength
		// test a single friend
		const aMessage = viewer.feed[0]
    expect(typeof aMessage.createdAt).toBe('string')
    expect(typeof aMessage.content).toBe('string')
	})

	test('should handle message user', async() => {
		const query = `
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
	 // First arg: false, there is no invalidField on the schema.
    const result = await tester.graphql(query)
    const {viewer} = result.data

		// test a single friend
		const aMessage = viewer.feed[0]
		expect(aMessage.user).toBeDefined()
		expect(typeof aMessage.user.id).toBe('string')
	})

	test('should add user query', async () => {
		const query = `
			{
				user(id: "2") {
					id
					firstName
					lastName
				}
			}
		`
		const result = await tester.graphql(query)
		const { user } = result.data
		expect(user).toBeDefined()
		expect(typeof user.firstName).toBe('string')
	})

	test('should use message DateTime', async () => {
		// @ts-ignore
		expect(resolvers.DateTime.name).toBe('DateTime')
	})

	test('should have sorted feed by reverse createdAt', async () => {
		const query = `
			{
				viewer {
					feed {
						id
						createdAt
					}
				}
			}
		`
    const result = await tester.graphql(query)
    const {viewer} = result.data
		
		const feed = viewer.feed.map(f => f.id)
		const sortedFeed = viewer.feed.sort((a, b) => a.createdAt < b.createdAt ? 1 : -1).map(f => f.id)
		expect(feed).toEqual(sortedFeed)
	})
})