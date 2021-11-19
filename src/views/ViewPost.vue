<template>
	<div>
		<div>dfdfd</div>
		{{ id }}1
		<div>sdfsdfds</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { useRoute } from 'vue-router'

export default defineComponent({
	setup() {
		const route = useRoute()
		const id = route.params.id

		return { id }
	},
})
</script>

<style scoped></style>
