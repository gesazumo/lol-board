import { instance } from '@/api'
import { onMounted, ref, Ref } from 'vue'
import request, { AxiosError } from 'axios'

const useGetData = (url: string) => {
	const result = ref()
	const error: Ref<AxiosError | null> = ref(null)

	const getDataFuction = async () => {
		try {
			const { data } = await instance.get(url)
			result.value = data
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
