<template>
	<div>
		<label>제목</label>
		<input :value="modelValue" @input="handleInput" />
	</div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'

export default defineComponent({
	setup(props, { emit }) {
		const { modelValue } = toRefs(props)

		const handleInput = (event: any): void => {
			emit('update:modelValue', event.target.value)
		}

		// const validate = computed(() => {
		// 	return false
		// })

		// const inputStyle = computed(() => {
		// 	return validate ? 'error' : ''
		// })

		return {
			// inputStyle,
			modelValue,
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
