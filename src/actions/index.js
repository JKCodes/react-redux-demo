import constants from '../constants'
import { TurboClient } from '../utils'

export default {

	createUser: (user) => {
		return {
			type: constants.USER_CREATED,
			data: user
		}
	}
}
