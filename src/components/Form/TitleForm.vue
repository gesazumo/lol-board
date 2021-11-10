<template>
	<div>
		<label>제목</label>
		{{ validate }}
		<input :value="modelValue" @input="handleInput" :class="inputStyle" />
		<div>{{ errorMsg }}</div>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
	props: {
		modelValue: {
			type: String,
			default: '',
		},
		errorMsg: {
			type: String,
			default: '다시입력하세요',
		},
	},
	setup(props, { emit }) {
		const validate = computed(() => {
			return props.modelValue?.length < 10
		})

		const inputStyle = ref('')

		const handleInput = (event: any): void => {
			if (validate.value) {
				// 통과
				inputStyle.value = ''
			} else {
				// 에러
				inputStyle.value = 'input-error'
			}
			emit('update:modelValue', event.target.value)
		}

		return {
			validate,
			inputStyle,
			handleInput,
		}
	},
})
</script>

<style></style>
