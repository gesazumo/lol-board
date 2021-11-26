import { apiFunction } from '@/interface'
import { instance } from '.'

export const createPost: apiFunction = body => {
	return instance.post('/boards', body)
}

export const getBoard: apiFunction = () => {
	return instance.get('/boards')
}

export const getPost: apiFunction = id => {
	return instance.get(`/boards/${id}`)
}

export const getPreviousPost: apiFunction = id => {
	return instance.get(`/boards/${id}/previous`)
}

export const getNextPost: apiFunction = id => {
	return instance.get(`/boards/${id}/next`)
}
