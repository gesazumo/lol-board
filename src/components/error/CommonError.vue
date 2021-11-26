<template>
	<div>
		<span>{{ errorMsg }}</span>
		<div>
			<a class="button" @click="$router.go(-1)">뒤로가기</a>
		</div>
		<div>
			<a class="button" @click="$router.push({ name: 'Home' })">홈으로</a>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'CommonError',
	props: {
		errorMsg: {
			type: String,
			required: true,
		},
	},
})
</script>
