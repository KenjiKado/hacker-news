const MONTHS = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

export const getConvertedDate = (timestamp: number) => {
	const date = timestamp * 1000;
	if (date + 24 * 60 * 60 * 1000 > Date.now()) {
		const diff = Date.now() - date;

		const h = Math.trunc(diff / 1000 / 60 / 60);
		const m = Math.trunc((diff - h * 60 * 60 * 1000) / 60 / 1000);

		return `${h ? h === 1 ? h + ' hour' : h + ' hours' : ''} ${((h && m > 0) || !h) ? (m === 1 ? m + ' minute' : m + ' minutes') : ''} ago`;
	} else {
		const dateValue = new Date(date);
		return `${('0' + dateValue.getDate()).slice(-2)} ${MONTHS[dateValue.getMonth()]} ${dateValue.getFullYear()} ${dateValue.getHours()}:${('0' + dateValue.getMinutes()).slice(-2)}`;
	}
};