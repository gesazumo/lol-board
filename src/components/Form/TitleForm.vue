<template>
	<div class="input-div">
		<label :style="{ gridColumn: '1/2' }">제목</label>
		<div :style="{ gridColumn: '2/2' }">
			<input
				class="input-init"
				:style="{ width: '100%' }"
				:value="modelValue"
				@input="handleInput"
				:class="inputStyle"
				maxlength="10"
			/>
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
			'title',
			emit,
			10,
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
