import { gql } from 'apollo-server'

const typeDefs = gql`
	type Query {
		hello: String
	}
`

export default typeDefs