import { validationFuncType } from '@/interface'
import { ref, onMounted } from 'vue'

const useForm = (
	name: string,
	emit: any,
	maxLength: number,
	...validationFucs: validationFuncType[]
) => {
	const errorMessage = ref('')
	const inputStyle = ref('')

	onMounted(() => {
		emit('form-error', { name, error: false })
	})

	const handleInput = (event: any): void => {
		let isError = false
		for (let i = 0; i < validationFucs.length; i++) {
			const { error, errorMsg } = validationFucs[i](
				event.target.value,
				maxLength,
			)
			if (error) {
				isError = true
				errorMessage.value = errorMsg
				inputStyle.value = 'input-error'
				break
			} else {
				isError = false
			}
			errorMessage.value = ''
			inputStyle.value = 'input-pass'
		}
		emit('form-error', { name, error: isError })
		emit('update:modelValue', event.target.value)
	}

	return {
		errorMessage,
		inputStyle,
		handleInput,
	}
}

export default useForm
