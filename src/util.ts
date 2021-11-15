import { app } from '@/main'
import { utilType } from '@/interface'

const utils: utilType = {
	isEmpty: value => {
		return {
			error: !value.trim(),
			errorMsg: app.config.globalProperties.$emptyMsg,
		}
	},

	isLong: (value, maxLength = 0) => {
		return {
			error: value.length > maxLength,
			errorMsg: app.config.globalProperties.$longMsg(maxLength),
		}
	},
}

export default utils
