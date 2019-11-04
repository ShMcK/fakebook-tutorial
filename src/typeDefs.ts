import { gql } from 'apollo-server'

const typeDefs = gql`
	type Query {
		viewer: User
	}

	type User {
		id: ID!
		firstName: String
		lastName: String
		friends: [User!]!
		feed: [Message!]!
	}

	type Message {
		id: ID!
		createdAt: String!
		content: String!
	}
`

export default typeDefs