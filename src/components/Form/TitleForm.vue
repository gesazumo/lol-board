<template>
	<div>
		<label>제목</label>
		<input :value="title" @input="handleInput" />
	</div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'

export default defineComponent({
	props: {
		title: String,
	},
	setup(props: { title: any }, { emit }) {
		console.log(props.title)

		const handleInput = (event: any): void => {
			console.log(event.target.value)
			emit('update:title', event.target.value)
		}

		watch(props.title, () => {
			console.log('박뀐다')
		})

		return {
			handleInput,
		}
	},
})
</script>

<style>
.error {
	border: 0.1px solid red;
}
</style>
