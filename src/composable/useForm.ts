import { validationFuncType } from '@/interface'
import { ref } from 'vue'

const useForm = (
	emit: any,
	maxLength: number,
	...validationFucs: validationFuncType[]
) => {
	const errorMessage = ref('')
	const inputStyle = ref('')

	const handleInput = (event: any): void => {
		for (let i = 0; i < validationFucs.length; i++) {
			const { error, errorMsg } = validationFucs[i](
				event.target.value,
				maxLength,
			)
			if (error) {
				console.log(errorMsg)
				errorMessage.value = errorMsg
				inputStyle.value = 'input-error'
				break
			}
			errorMessage.value = ''
			inputStyle.value = 'input-pass'
		}
		emit('update:modelValue', event.target.value)
	}

	return {
		errorMessage,
		inputStyle,
		handleInput,
	}
}

export default useForm
