<template>
	<div v-if="postData">
		<div>{{ flagText }}</div>
		<a
			class="button"
			@click="
				$router.push({ name: 'ViewPost', params: { id: postData._id } })
			"
			>{{ postData.title }} {{ postData._id }}</a
		>
	</div>
</template>

<script setup lang="ts">
interface Props {
	// eslint-disable-next-line prettier/prettier
	postData: post | null,
	flagText: string
}

import { defineProps, withDefaults, toRefs } from 'vue'
import { post } from '@/interface'

const props = withDefaults(defineProps<Props>(), {
	postData: () => null,
	flagText: '이전글',
})

const { postData, flagText } = toRefs(props)
</script>

<style scoped></style>
