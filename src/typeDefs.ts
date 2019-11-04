import { gql } from 'apollo-server'

const typeDefs = gql`
	type Query {
		viewer: User
		user(id: ID!): User!
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
		user: User!
	}
`

export default typeDefs