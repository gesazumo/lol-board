import { AxiosResponse } from "axios";

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

export interface apiFunction {
	(...args: any) : Promise<AxiosResponse<any, any>>
}

export interface validationFuncType {
	(value: string, maxLength?: number): errorType
}

export interface board {
	_id?: string
	title: string
	body: string
	like: number
	writer: string
	createDate?: string
}


