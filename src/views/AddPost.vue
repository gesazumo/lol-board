<template>
	<div>
		<TitleForm v-model="title" @form-error="formCheck"></TitleForm>
		<BodyForm v-model="body" @form-error="formCheck"></BodyForm>
		<button class="primary large" @click="addPost">등록</button>\
		{{ formError }}
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TitleForm from '@/components/Form/TitleForm.vue'
import BodyForm from '@/components/Form/BodyForm.vue'
import { createPost } from '@/api/board'

export default defineComponent({
	components: {
		TitleForm,
		BodyForm,
	},
	data(): any {
		return {
			validations: [],
			title: '제목',
			body: '내용입니다',
		}
	},
	methods: {
		async addPost() {
			if (this.formError) {
				return
			}
			const post = {
				title: this.title,
				body: this.body,
				like: 0,
				writer: '쓰니',
			}
			const result = await createPost(post)
			console.log(result)
			this.$router.push({ name: 'Home' })
		},
		formCheck(validation: { name: string; error: boolean }) {
			const index = this.validations.findIndex(
				(item: { name: string; error: boolean }) =>
					item.name == validation.name,
			)
			if (index == -1) {
				this.validations.push(validation)
			} else {
				this.validations[index].error = validation.error
			}
		},
	},
	computed: {
		formError() {
			let flag = false
			this.validations.forEach(
				(item: { name: string; error: boolean }) => {
					if (item.error) flag = true
				},
			)
			return flag
		},
	},
})
</script>

<style scoped></style>
