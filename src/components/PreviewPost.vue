<template>
	<div>
		<div v-if="error">
			<error-comp
				:errorMsg="
					error.response.status == 404
						? `${flagText}이 없습니다.`
						: '서버에러!!'
				"
			/>
		</div>

		<div v-if="postData?._id">
			<div>{{ flagText }}</div>
			<a
				class="button"
				@click="
					$router.push({
						name: 'ViewPost',
						params: { id: postData._id },
					})
				"
				>{{ postData.title }}</a
			>
		</div>
	</div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, toRefs } from 'vue'
import { post } from '@/interface'
import { AxiosError } from 'axios'

interface Props {
	/* eslint-disable prettier/prettier */
	postData: post | null;
	flagText: string;
	error: AxiosError | null;
}

const props = withDefaults(defineProps<Props>(), {
	postData: () => null,
	flagText: '이전글',
	error: () => null 
})

const { postData, flagText, error } = toRefs(props)
</script>

<style scoped></style>
