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
			<div class="input-error-msg" v-if="errorMsg">{{ errorMsg }}</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ref } from 'vue'
import useValidation from '@/composable/useValidation'

export default defineComponent({
	props: {
		modelValue: {
			type: String,
			default: '',
		},
	},
	data() {
		return {
			key: this.emptyMsg,
		}
	},
	setup(props, { emit }) {
		const internalInstance =
			getCurrentInstance()?.appContext.config.globalProperties
		const errorMsg = ref('')

		const { isEmpty, isLong } = useValidation()

		const inputStyle = ref('')

		const handleInput = (event: any): void => {
			if (isEmpty(event.target.value)) {
				errorMsg.value = internalInstance?.$emptyMsg
				inputStyle.value = 'input-pass'
			} else if (isLong(event.target.value, 5)) {
				errorMsg.value = internalInstance?.$longMsg(5)
				console.log('너무길어')
			} else {
				// 에러
				errorMsg.value = ''
				inputStyle.value = 'input-error'
			}
			emit('update:modelValue', event.target.value)
		}

		return {
			errorMsg,
			inputStyle,
			handleInput,
		}
	},
})
</script>

<style></style>
