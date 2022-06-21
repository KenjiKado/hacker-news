export const getIndexList = (list: number[], currentPage: number, pageSize: number) => {
	const firstPageIndex = (currentPage - 1) * pageSize;
	const lastPageIndex = firstPageIndex + pageSize;

	return list.slice(firstPageIndex, lastPageIndex);
};