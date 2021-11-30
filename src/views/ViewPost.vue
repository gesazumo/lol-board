<template>
	<div>
		<!-- 에러도 안으로 옮겨야하나?? -->
		<div v-if="error">
			<error-comp
				:errorMsg="
					error.response.status == 404
						? '없는게시물 입니다.'
						: '서버에러!!'
				"
			/>
		</div>

		<Post :postData="post" />
		<PreviewPost :postData="nextResult" flagText="다음글" />
		<PreviewPost :postData="nextResult" flagText="이전글" />
	</div>
</template>

<script lang="ts">
import usePost from '@/composable/usePost'
import Post from '@/components/Post.vue'
import PreviewPost from '@/components/PreviewPost.vue'
import { defineComponent } from '@vue/runtime-core'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import useGetData from '@/composable/useGetData'
import { getNextPost } from '@/api/board'

export default defineComponent({
	components: {
		PreviewPost,
		Post,
	},
	setup() {
		const route = useRoute()
		const id = ref(route.params.id)

		// const internalInstance =
		// 	getCurrentInstance()?.appContext.config.globalProperties

		const { post, error } = usePost(id)

		const { result: nextResult, error: getNextBoardError } = useGetData(
			() => getNextPost(id.value),
		)
		watch(
			() => route.params.id,
			() => {
				id.value = route.params.id
			},
		)

		// const postData = computed(() => {
		// 	if (result.value) {
		// 		return {
		// 			...result.value,
		// 			createDate: internalInstance?.$yyyyMMDDHHmmss(
		// 				result.value.createDate,
		// 			),
		// 		}
		// 	}
		// })

		return { id, post, error, nextResult, getNextBoardError }
	},
})
</script>

<style scoped></style>
