import { gql } from 'apollo-server'

const typeDefs = gql`
	scalar DateTime

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
		createdAt: DateTime!
		content: String!
		user: User!
	}
`

export default typeDefs