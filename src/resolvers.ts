import users from './data/users'

const resolvers = {
	Query: {
		viewer() {
			return users.find(user => user.id === '1')
		}
	},
	User: {
		friends(parent) {
			const userFriends = parent.friends
			return users.filter(user => userFriends.includes(user.id))
		}
	}
}

export default resolvers