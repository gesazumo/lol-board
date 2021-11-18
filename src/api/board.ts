import { post } from '@/interface'
import { instance } from '.'

export const createPost = (body: post) => {
	return instance.post('/boards', body)
}
