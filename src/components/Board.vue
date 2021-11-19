<template>
	<section>
		<table>
			<thead>
				<th :style="{ width: '10%' }">번호</th>
				<th :style="{ width: '40%' }">제목</th>
				<th :style="{ width: '20%' }">작성자</th>
				<th :style="{ width: '20%' }">등록일</th>
				<th :style="{ width: '5%' }">조회</th>
				<th :style="{ width: '5%' }">좋아요</th>
			</thead>
			<tbody>
				<tr v-for="(data, index) in filterdDataList" :key="data._id">
					<td>{{ index }}</td>
					<td>
						<a
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

<script lang="ts">
import useGetData from '@/composable/useGetData'
import useDateFilter from '@/composable/useDateFilter'
import { defineComponent } from 'vue'

export default defineComponent({
	setup() {
		const { dataList } = useGetData('/boards')
		const { filterdDataList } = useDateFilter(dataList)

		return { dataList, filterdDataList }
	},
})
</script>

<style scoped></style>
