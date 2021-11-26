<template>
	<div>
		<!-- 에러도 안으로 옮겨야하나?? -->
		<div v-if="getBoardError">
			<error-comp
				:errorMsg="
					getBoardError.response.status == 404
						? '없는게시물 입니다.'
						: '서버에러!!'
				"
			/>
		</div>

		<Post :postData="postData" />
		<PreviewPost :postData="nextResult" flagText="다음글" />
		<PreviewPost :postData="nextResult" flagText="이전글" />
	</div>
</template>

<script lang="ts">
import { getBoard, getNextPost } from '@/api/board'
import useGetData from '@/composable/useGetData'
import Post from '@/components/Post.vue'
import PreviewPost from '@/components/PreviewPost.vue'
import {
	computed,
	defineComponent,
	getCurrentInstance,
} from '@vue/runtime-core'
import { watch, ref } from 'vue'

import { useRoute } from 'vue-router'

export default defineComponent({
	components: {
		PreviewPost,
		Post,
	},
	setup() {
		console.log('여깅')
		const route = useRoute()
		const id = ref(route.params.id)
		const internalInstance =
			getCurrentInstance()?.appContext.config.globalProperties

		watch(
			() => route.params.id,
			() => {
				console.log('바뀐다')
				id.value = route.params.id
			},
		)

		// : { result: Ref<post>; error: Ref<AxiosError | null> }
		const { result, error: getBoardError } = useGetData(getBoard, id)

		const { result: nextResult, error: getNextBoardError } = useGetData(
			() => getNextPost(id.value),
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

		return { id, postData, getBoardError, nextResult, getNextBoardError }
	},
})
</script>

<style scoped></style>
