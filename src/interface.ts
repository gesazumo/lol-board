export interface errorType {
	error: boolean
	errorMsg: string
}

export interface constantType {
	[key: string]: string | number | Function
}

export interface utilType {
	[key: string]: string | number | validationFuncType
}

export interface validationFuncType {
	(value: string, maxLength?: number): errorType
}




