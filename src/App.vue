<template>
	<v-app class="container">
		<v-main>
			<Header />
			<main>
				<!-- 레프트메뉴 -->
				<left-menu :style="{ gridColumn: '1/2' }" />
				<router-view :style="{ gridColumn: '2/2' }" />
			</main>
		</v-main>
	</v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue'
import LeftMenu from '@/components/LeftMenu.vue'

export default defineComponent({
	name: 'App',
	components: {
		Header,
		LeftMenu,
	},
})
</script>
