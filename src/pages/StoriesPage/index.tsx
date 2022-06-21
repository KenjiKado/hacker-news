import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { STORIES_PAGE_SIZE } from '../../constants/paging';
import { STORIES } from '../../constants/stories';
import { useStoriesSelector } from '../../store/selectors/storiesSelector';
import { fetchStoriesList } from '../../store/actions/storiesActions';
import Layout from '../../components/Layout';
import StoriesList from '../../components/StoriesList';
import Pagination from '../../components/Pagination';

interface IProps {
	type: keyof typeof STORIES;
}

const StoriesPage = ({ type }: IProps) => {
	const [page, setPage] = useState(1);
	const { list, totalCount, loading } = useStoriesSelector();
	const dispatch = useDispatch();

	useEffect(() => {
		setPage(1);
	}, [type]);

	useEffect(() => {
		dispatch(fetchStoriesList({ currentPage: page, pageSize: STORIES_PAGE_SIZE, type }));
	}, [dispatch, page, type]);

	return (
		<Layout isLoading={loading && !list.length}>
			<StoriesList
				list={list}
				loading={loading}
				startIndex={(page - 1) * STORIES_PAGE_SIZE}
			/>
			<Pagination
				currentPage={page}
				onChange={setPage}
				totalCount={totalCount}
				pageSize={STORIES_PAGE_SIZE}
			/>
		</Layout>
	);
};

export default StoriesPage;