import { watch, ref, Ref, onMounted, getCurrentInstance, computed } from 'vue'
import request, { AxiosError } from 'axios'
import { getPost } from '@/api/board'
import { post } from '@/interface'

const usePost = (id: Ref<string | string[]>) => {
	const internalInstance =
		getCurrentInstance()?.appContext.config.globalProperties

	const result: Ref<post | any> = ref({})
	const error: Ref<AxiosError | null> = ref(null)

	const getDataFuction = async () => {
		console.log(id.value)
		try {
			const { data } = await getPost(id.value)
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
	watch(id, () => getDataFuction())
	const postData = computed(() => {
		return {
			...result.value,
			createDate: internalInstance?.$yyyyMMDDHHmmss(
				result.value.createDate,
			),
		}
	})

	return {
		postData,
		error,
	}
}

export default usePost
