<template>
	<div class="input-div">
		<label :style="{ gridColumn: '1/2' }">제목</label>
		<div :style="{ gridColumn: '2/2' }">
			<input
				class="input-init"
				:value="modelValue"
				@input="handleInput"
				:class="inputStyle"
			/>
			<div class="input-error-msg" v-if="!validate">{{ errorMsg }}</div>
		</div>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import useValidation from '@/composable/useValidation'

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

		const { isEmpty, isLong } = useValidation()

		const inputStyle = ref('')

		const handleInput = (event: any): void => {
			if (isEmpty(event.target.value)) {
				console.log(event.target.value)
				console.log('비어있음')
				inputStyle.value = 'input-pass'
			} else if (isLong(event.target.value, 5)) {
				console.log('너무길어')
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
