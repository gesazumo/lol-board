<template>
	<article>
		<div class="article-header">
			<BestBoard />
			<div class="col-hr" />
			<BestBoard />
		</div>
		<Board :board="board" :error="boardError" />
	</article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Board from '@/components/Board.vue'
import BestBoard from '@/components/BestBoard.vue'
import useBoard from '@/composable/useBoard'

export default defineComponent({
	name: 'Home',
	components: { Board, BestBoard },
	data() {
		return {}
	},
	setup() {
		const { board, error: boardError } = useBoard()
		return {
			board,
			boardError,
		}
	},
})
</script>
