<template>
	<section>
		{{ error }}
		<table v-if="board">
			<thead>
				<th :style="{ width: '10%' }">번호</th>
				<th :style="{ width: '40%' }">제목</th>
				<th :style="{ width: '20%' }">작성자</th>
				<th :style="{ width: '20%' }">등록일</th>
				<th :style="{ width: '5%' }">조회</th>
				<th :style="{ width: '5%' }">좋아요</th>
			</thead>
			<tbody>
				<tr v-for="(data, index) in board" :key="data._id">
					<td>{{ index }}</td>
					<td>
						<a
							class="router-default"
							@click="
								$router.push({
									name: 'ViewPost',
									params: { id: data._id },
								})
							"
							>{{ data.title }}</a
						>
					</td>
					<td>{{ data.writer }}</td>
					<td>
						{{ data.createDate }}
					</td>
					<td>0</td>
					<td>{{ data.like }}</td>
				</tr>
			</tbody>
		</table>
		<a class="button" @click="$router.push({ name: 'AddPost' })"
			>새글쓰기</a
		>
	</section>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults, toRefs, Ref } from 'vue'
import { post } from '@/interface'
import { AxiosError } from 'axios'

interface Props {
	// eslint-disable-next-line prettier/prettier
	board: Ref<Array<post> | null> | null,
	error: Ref<AxiosError | null> | null
}

const props = withDefaults(defineProps<Props>(), {
	board: () => null,
	error: () => null,
})

const { board, error } = toRefs(props)
</script>
