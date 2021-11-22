import { utilType } from '@/interface'
import moment from 'moment'

const utils: utilType = {
	$yyyyMMDDHHmmss: (date: string) => {
		return moment(date).format('yyyy.MM.DD HH:mm:ss')
	},
}

export default utils
