import { validationFuncType } from '@/interface'
import { getCurrentInstance } from 'vue'

const useValidation = () => {
	const internalInstance =
		getCurrentInstance()?.appContext.config.globalProperties

	const isEmpty: validationFuncType = value => {
		return {
			error: !value.trim(),
			errorMsg: internalInstance?.$emptyMsg,
		}
	}
	const isLong: validationFuncType = (value, maxLength = 30) => {
		return {
			error: value.length > maxLength,
			errorMsg: internalInstance?.$longMsg(maxLength),
		}
	}

	return {
		isEmpty,
		isLong,
	}
}

export default useValidation
