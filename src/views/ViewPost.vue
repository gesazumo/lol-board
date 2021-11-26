<template>
	<div>
		<div v-if="getBoardError">
			<error-comp
				:errorMsg="
					getBoardError.response.status == 404
						? '없는게시물 입니다.'
						: '서버에러!!'
				"
			/>
		</div>

		<div v-if="postData">
			<div>{{ postData.title }}</div>
			<div>{{ postData.writer }}</div>
			<div>{{ postData.createDate }}</div>
			<div>{{ postData.body }}</div>
		</div>
	</div>
</template>

<script lang="ts">
import { getBoard, getNextBoard } from '@/api/board'
import useGetData from '@/composable/useGetData'
import {
	computed,
	defineComponent,
	getCurrentInstance,
} from '@vue/runtime-core'

import { useRoute } from 'vue-router'

export default defineComponent({
	setup() {
		const route = useRoute()
		const id = route.params.id
		const internalInstance =
			getCurrentInstance()?.appContext.config.globalProperties

		// : { result: Ref<post>; error: Ref<AxiosError | null> }
		const { result, error: getBoardError } = useGetData(() => getBoard(id))

		const { result: nextResult, error: getNextBoardError } = useGetData(
			() => getNextBoard(id),
		)

		const postData = computed(() => {
			if (result.value) {
				return {
					...result.value,
					createDate: internalInstance?.$yyyyMMDDHHmmss(
						result.value.createDate,
					),
				}
			}
		})

		return { postData, getBoardError, nextResult, getNextBoardError }
	},
})
</script>

<style scoped></style>
