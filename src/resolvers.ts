import users from './data/users'
import messages from './data/messages'

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
		},
		feed(parent) {
			const feedUsers = [parent.id, ...parent.friends]
			return messages.filter(user => feedUsers.includes(user.id))
		}
	},
	Message: {
		user(parent) {
			const userId = parent.id
			return users.find(user => user.id === userId)
		}
	}
}

export default resolvers