import { onMounted, ref, Ref } from 'vue'
import request, { AxiosError } from 'axios'
import { apiFunction } from '@/interface'

const useGetData = (api: apiFunction) => {
	const result = ref()
	const error: Ref<AxiosError | null> = ref(null)

	const getDataFuction = async () => {
		try {
			const { data } = await api()
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

	return {
		result,
		error,
	}
}

export default useGetData
