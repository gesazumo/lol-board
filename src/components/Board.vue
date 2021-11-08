<template>
	<article class="article">
		<table>
			<thead>
				<th :style="{ width: '50%' }">제목</th>
				<th :style="{ width: '20%' }">작성자</th>
				<th :style="{ width: '20%' }">등록일</th>
				<th :style="{ width: '5%' }">조회</th>
				<th :style="{ width: '5%' }">좋아요</th>
			</thead>
			<tbody>
				<tr v-for="i in 10" :key="i">
					<td>dfasdf</td>
					<td>dfasdf</td>
					<td>dd</td>
					<td>dfasdf</td>
					<td>10</td>
				</tr>
			</tbody>
		</table>
	</article>
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
