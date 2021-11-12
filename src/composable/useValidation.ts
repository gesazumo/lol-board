const useValidation = (...validateFuntions: Function[]) => {
	const isEmpty = (value: string): {error:boolean, errorMsg: string} => {
		return {
			error: !value.trim(),
			errorMsg: 'dd'
		}
	}
	const isLong = (value: string, maxLength: number): boolean => {
		return value.length > maxLength
	}

	validateFuntions.

	return {
		isEmpty,
		isLong,
	}
}

export default useValidation

// 기본적인 검사는 하고,
// validation 함수를 넘기면, 걸리면 트루(+에러메세지), 안걸리면 펄스
