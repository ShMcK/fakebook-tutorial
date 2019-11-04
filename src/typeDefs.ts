import { gql } from 'apollo-server'

const typeDefs = gql`
	type Query {
		viewer: User
	}

	type User {
		id: ID!
		firstName: String
		lastName: String
	}
`

export default typeDefs