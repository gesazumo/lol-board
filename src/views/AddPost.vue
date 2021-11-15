<template>
	<form>
		<TitleForm v-model="title" @form-error="formCheck"></TitleForm>
		<BodyForm v-model="body" @form-error="formCheck"></BodyForm>
		<button class="primary large" @click="addPost">등록</button>\
		{{ errors }}
	</form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TitleForm from '@/components/Form/TitleForm.vue'
import BodyForm from '@/components/Form/BodyForm.vue'

export default defineComponent({
	components: {
		TitleForm,
		BodyForm,
	},
	data() {
		return {
			errors: [],
			title: '제목',
			body: '내용입니다',
		}
	},
	methods: {
		addPost() {
			const post = {
				title: this.title,
				body: this.body,
			}
			return post
		},
		formCheck(error: boolean) {
			console.log(error)
		},
	},
})
</script>

<style scoped></style>
