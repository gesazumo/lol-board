<template>
	<div v-if="postData">
		<div>{{ postData.title }}</div>
		<div>{{ postData.writer }}</div>
		<div>{{ postData.createDate }}</div>
		<div>{{ postData.body }}</div>
	</div>
</template>

<script setup lang="ts">
import { defineProps, toRefs, withDefaults } from 'vue'
import { post } from '@/interface'
interface Props {
	postData: post | null
}

const props = withDefaults(defineProps<Props>(), {
	postData: () => null,
})

const { postData } = toRefs(props)
</script>

<style scoped></style>
