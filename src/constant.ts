interface constantType {
	[key: string]: string | number | Function
}

const constant: constantType = {
	$emptyMsg: '필수값입니다.',
	$longMsg: (count: number) => {
		return `${count}글자까지만 입력가능합니다.`
	},
}

export default constant
