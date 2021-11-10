<template>
	<div>
		<TitleForm v-model="title"></TitleForm>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TitleForm from '@/components/Form/TitleForm.vue'

export default defineComponent({
	components: {
		TitleForm,
	},
	data() {
		return {
			title: '123',
		}
	},
})
</script>

<style scoped></style>
