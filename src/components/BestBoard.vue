<template>
	<div class="best">
		<div>오늘의 베스트</div>
		<div v-for="i in 5" :key="i">
			<div class="best-row">
				<div :style="{ gridColumn: '1/2' }">1</div>
				<div :style="{ gridColumn: '2/3' }">2</div>
				<div :style="{ gridColumn: '3/4' }">3</div>
				<div :style="{ gridColumn: '4/4' }">4</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	setup() {
		return {}
	},
})
</script>

<style scoped></style>
