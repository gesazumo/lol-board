<template>
	<v-app class="container">
		<v-main>
			<Header />
			<main>
				<!-- 레프트메뉴 -->
				<div :style="{ gridColumn: '1/2' }">dd</div>
				<router-view :style="{ gridColumn: '2/2' }" />
			</main>
		</v-main>
	</v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue'

export default defineComponent({
	name: 'App',
	components: {
		Header,
	},
})
</script>
