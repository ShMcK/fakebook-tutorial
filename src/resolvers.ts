import users from './data/users'

const resolvers = {
	Query: {
		viewer() {
			return users.find(user => user.id === '1')
		}
	}
}

export default resolvers