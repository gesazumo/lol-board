<template>
	<div class="input-div">
		<label :style="{ gridColumn: '1/2' }">내용</label>
		<div :style="{ gridColumn: '2/2' }">
			<textarea
				class="input-init"
				:style="{ width: '100%', height: '300px' }"
				:value="modelValue"
				@input="handleInput"
				:class="inputStyle"
			/>
			<div>{{ modelValue.length }}/50</div>
			<div class="input-error-msg" v-if="errorMessage">
				{{ errorMessage }}
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useValidation from '@/composable/useValidation'
import useForm from '@/composable/useForm'

export default defineComponent({
	props: {
		modelValue: {
			type: String,
			default: '',
		},
	},
	setup(props, { emit }) {
		const { isEmpty, isLong } = useValidation()

		const { errorMessage, inputStyle, handleInput } = useForm(
			emit,
			50,
			isEmpty,
			isLong,
		)

		return {
			errorMessage,
			inputStyle,
			handleInput,
		}
	},
})
</script>

<style></style>
