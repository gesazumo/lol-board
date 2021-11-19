/* eslint-disable vue/return-in-computed-property */
import { computed } from 'vue'
import moment from 'moment'

const useDateFilter = (dataList: any) => {
	const filterdDataList = computed(() => {
		return dataList.value.map((data: any) => {
			console.log(data)

			return {
				...data,
				createDate: moment(data.createDate).format(
					'yyyy.MM.DD HH:mm:ss',
				),
			}
		})
	})

	return {
		filterdDataList,
	}
}

export default useDateFilter
