import { apiFunction } from '@/interface'
import { instance } from '.'

export const createBoard: apiFunction = body => {
	return instance.post('/boards', body)
}

export const getBoardList: apiFunction = () => {
	return instance.get('/boards')
}

export const getBoard: apiFunction = id => {
	return instance.get(`/boards/${id}`)
}

export const getPreviousBoard: apiFunction = id => {
	return instance.get(`/boards/${id}/previous`)
}

export const getNextBoard: apiFunction = id => {
	return instance.get(`/boards/${id}/next`)
}
