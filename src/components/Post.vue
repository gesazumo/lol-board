<template>
	<div class="post">
		<div class="header">
			<div class="writer">{{ postData.writer }}</div>
			<div class="createDate">{{ postData.createDate }}</div>
		</div>
		<div class="content">
			<div class="content-header">
				<div class="title">{{ postData.title }}</div>
			</div>
			<div class="content-body">
				<div class="body">{{ postData.body }}</div>
			</div>
		</div>

		<div class="createDate"></div>
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
