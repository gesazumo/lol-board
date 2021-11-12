const useValidation = () => {
	const isEmpty = (value: string): boolean => {
		return !value.trim()
	}
	const isLong = (value: string, maxLength: number): boolean => {
		return value.length > maxLength
	}

	return {
		isEmpty,
		isLong,
	}
}

export default useValidation
