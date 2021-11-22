import { instance } from '@/api'
import { onMounted, ref } from 'vue'

const useGetData = (url: string) => {
	const result = ref()

	const getDataFuction = async () => {
		const { data } = await instance.get(url)
		result.value = data
	}

	onMounted(() => {
		getDataFuction()
	})

	return {
		result,
	}
}

export default useGetData
