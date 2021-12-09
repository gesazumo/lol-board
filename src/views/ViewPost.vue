<template>
	<div>
		<div v-if="error">
			<error-comp
				:errorMsg="
					error.response.status == 404
						? '없는게시물 입니다.'
						: '서버에러!!'
				"
			/>
		</div>

		<Post :postData="postData" />
		<PreviewPost
			:postData="nextResult"
			:error="getNextPostError"
			flagText="다음글"
		/>
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
import useNextPost from '@/composable/useNextPost'

export default defineComponent({
	components: {
		PreviewPost,
		Post,
	},
	setup() {
		const route = useRoute()
		const id = ref(route.params.id)

		watch(
			() => route.params.id,
			() => {
				if (route.params.id) id.value = route.params.id
			},
		)

		const { postData, error } = usePost(id)
		const { result: nextResult, error: getNextPostError } = useNextPost(id)

		return { id, postData, error, nextResult, getNextPostError }
	},
})
</script>

<style scoped></style>
