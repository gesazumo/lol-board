import { watch, ref, Ref, onMounted } from 'vue'
import request, { AxiosError } from 'axios'
import { getNextPost } from '@/api/board'
import { post } from '@/interface'

const useNextPost = (id: Ref<string | string[]>) => {
	const result: Ref<post | any> = ref({})
	const error: Ref<AxiosError | null> = ref(null)

	const getDataFuction = async () => {
		try {
			const { data } = await getNextPost(id.value)
			result.value = data
			error.value = null
		} catch (err) {
			if (request.isAxiosError(err)) {
				error.value = err
			}
		}
	}
	onMounted(() => {
		getDataFuction()
	})

	watch(id, getDataFuction)

	return {
		result,
		error,
	}
}

export default useNextPost
