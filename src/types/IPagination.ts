export interface IPagination {
	currentPage: number;
	totalCount: number;
	pageSize: number;
	siblingCount?: number;
}