import { watch, ref, Ref } from 'vue'
import request, { AxiosError } from 'axios'
import { getPost } from '@/api/board'

const usePost = (id: Ref<string | string[]>) => {
	const post = ref()
	const error: Ref<AxiosError | null> = ref(null)

	const getDataFuction = async () => {
		try {
			const { data } = await getPost(id.value)
			post.value = data
			error.value = null
		} catch (err) {
			if (request.isAxiosError(err)) {
				error.value = err
			}
		}
	}

	watch(id, getDataFuction)

	return {
		post,
		error,
	}
}

export default usePost
