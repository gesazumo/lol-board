const useForm = () => {
	const internalInstance =
		getCurrentInstance()?.appContext.config.globalProperties
	const errorMsg = ref('')

	const { isEmpty, isLong } = useValidation()

	const inputStyle = ref('')

	const handleInput = (event: any): void => {
		if (isEmpty(event.target.value)) {
			errorMsg.value = internalInstance?.$emptyMsg
			inputStyle.value = 'input-error'
		} else if (isLong(event.target.value, 5)) {
			errorMsg.value = internalInstance?.$longMsg(5)
			inputStyle.value = 'input-error'
		} else {
			errorMsg.value = ''
			inputStyle.value = 'input-pass'
		}
		emit('update:modelValue', event.target.value)
	}
}

export default useForm
