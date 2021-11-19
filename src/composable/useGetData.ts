import { instance } from '@/api'
import { onMounted, ref } from 'vue'

const useGetData = (url: string) => {
	const dataList = ref([])

	const getDataFuction = async () => {
		const { data } = await instance.get(url)
		dataList.value = data
	}

	onMounted(() => {
		getDataFuction()
	})

	return {
		dataList,
	}
}

export default useGetData
