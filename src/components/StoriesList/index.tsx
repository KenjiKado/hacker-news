import React from 'react';
import { IStory } from '../../types/IStory';
import StoryItem from './StoryItem';

import styles from './storiesList.module.scss';

interface IProps {
	list: IStory[];
	loading: boolean;
	startIndex: number;
}

const StoriesList = ({ list, loading, startIndex }: IProps) => {
	const getOrdinal = (num: number) => {
		return num + 1 + startIndex;
	};

	return (
		<div className={styles.listContainer}>
			{list.map((story, i) => (
				<StoryItem
					{...story}
					loading={loading}
					ordinal={getOrdinal(i)}
					key={story?.id}
				/>))}
		</div>
	);
};

export default StoriesList;