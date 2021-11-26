import { onMounted, ref, Ref } from 'vue'
import request, { AxiosError } from 'axios'
import { getBoard } from '@/api/board'

const useBoard = () => {
	const board = ref()
	const error: Ref<AxiosError | null> = ref(null)

	const getDataFuction = async () => {
		try {
			const { data } = await getBoard()
			board.value = data
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
		board,
		error,
	}
}

export default useBoard
