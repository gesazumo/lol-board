export interface errorType {
	error: boolean
	errorMsg: string
}

export interface constantType {
	[key: string]: string | number | Function
}

export interface utilType {
	[key: string]: Function
}

export interface validationFuncType {
	(value: string, maxLength?: number): errorType
}

export interface post {
	title: string
	body: string
	like: number
	writer: string
	createDate?: string
}
