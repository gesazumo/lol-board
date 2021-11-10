<template>
	<article>
		<div class="article-header">
			<BestBoard />
			<div class="col-hr" />
			<BestBoard />
		</div>
		<Board />
	</article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Board from '@/components/Board.vue'
import BestBoard from '@/components/BestBoard.vue'

export default defineComponent({
	name: 'Home',
	components: { Board, BestBoard },
	data() {
		return {}
	},
})
</script>
