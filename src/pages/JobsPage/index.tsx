import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import JobsList from '../../components/JobsList';
import Layout from '../../components/Layout';
import Pagination from '../../components/Pagination';
import { JOBS_PAGE_SIZE } from '../../constants/paging';
import { fetchJobsList } from '../../store/actions/jobsActions';
import { useJobsSelector } from '../../store/selectors/jobsSelector';

const JobsPage = () => {
	const [page, setPage] = useState(1);
	const { list, totalCount, loading } = useJobsSelector();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchJobsList({ currentPage: page, pageSize: JOBS_PAGE_SIZE }));
	}, [dispatch, page]);

	return (
		<Layout isLoading={loading && !list.length}>
			<JobsList
				list={list}
				loading={loading}
			/>
			<Pagination
				onChange={setPage}
				currentPage={page}
				totalCount={totalCount}
				pageSize={JOBS_PAGE_SIZE}
			/>
		</Layout>
	);
};

export default JobsPage;