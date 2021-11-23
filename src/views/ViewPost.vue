<template>
	<div>
		{{ getBoardError }}

		<div v-if="postData">
			<div>{{ postData.title }}</div>
			<div>{{ postData.writer }}</div>
			<div>{{ postData.createDate }}</div>
			<div>{{ postData.body }}</div>
		</div>
	</div>
</template>

<script lang="ts">
import useGetData from '@/composable/useGetData'
import { post } from '@/interface'
import {
	computed,
	defineComponent,
	getCurrentInstance,
	Ref,
} from '@vue/runtime-core'
import { AxiosError } from 'axios'

import { useRoute } from 'vue-router'

export default defineComponent({
	setup() {
		const route = useRoute()
		const id = route.params.id
		const internalInstance =
			getCurrentInstance()?.appContext.config.globalProperties

		const {
			result,
			error: getBoardError,
		}: { result: Ref<post>; error: Ref<AxiosError | null> } = useGetData(
			`/boards/${id}`,
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

		return { postData, getBoardError }
	},
})
</script>

<style scoped></style>
