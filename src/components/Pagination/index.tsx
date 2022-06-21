import React from 'react';
import { IPagination } from '../../types/IPagination';
import { usePagination } from './usePagination';
import cx from 'classnames';

import styles from './pagination.module.scss';

interface IPaginationProps extends IPagination {
	className?: string;
	onChange: (page: number) => void;
}

const Pagination = ({ onChange, totalCount, siblingCount, currentPage, pageSize, className }: IPaginationProps) => {

	const paginationRange = usePagination({
		currentPage,
		totalCount,
		siblingCount,
		pageSize
	});

	const onNext = () => {
		if (paginationRange && currentPage !== paginationRange[paginationRange.length - 1]) {
			onChange(currentPage + 1);
		}
	};

	const onPrevious = () => {
		if (currentPage !== 1) {
			onChange(currentPage - 1);
		}
	};

	return (
		<>
			{totalCount &&
				<nav className={styles.pagination}>
					<ul>
						<li
							className={cx({
								[styles.disabled]: currentPage === 1
							})}
							onClick={onPrevious}
						>
							<span>Previous</span>
						</li>
						{paginationRange && paginationRange.map((page, i) => {
							if (typeof page === 'string') {
								return <li
									className={styles.dots}
									key={i}
								><span>&#8230;</span></li>;
							} else {
								return (
									<li
										key={i}
										className={cx({
											[styles.active]: page === currentPage
										})}
										onClick={() => onChange(page)}
									>
										<span>{page}</span>
									</li>
								);
							}
						})}

						<li
							className={cx({
								[styles.disabled]: (paginationRange && currentPage === paginationRange[paginationRange.length - 1])
							})}
							onClick={onNext}
						>
							<span>Next</span>
						</li>
					</ul>
				</nav>}
		</>
	);
};

export default Pagination;