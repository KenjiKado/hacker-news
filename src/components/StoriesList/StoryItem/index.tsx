import React from 'react';
import cx from 'classnames';
import { getConvertedDate } from '../../../helpers/dateTimeHelper';
import { formatUrl } from '../../../helpers/stringHelper';
import { IStory } from '../../../types/IStory';

import styles from './storyItem.module.scss';

interface IProps extends IStory {
	ordinal: number;
	loading: boolean;
}

const StoryItem = ({ by, score, title, url, time, ordinal, loading }: IProps) => (
	<div className={styles.storyItem}>
		<div className={cx(styles.ordinal, { [styles.loading]: loading })}>
			<span>{ordinal}</span>
		</div>
		<div className={styles.itemContainer}>
			<header className={cx(styles.header, { [styles.loading]: loading })}>
				<h3>{title}</h3>
				{url && <span>(<a
					href={url}
					target='_blank'
					rel='noreferrer'
				>{formatUrl(url)}</a>)</span>}
			</header>
			<footer className={cx(styles.footer, { [styles.loading]: loading })}>
				<span>{score} {score === 1 ? 'point' : 'points'} </span>
				<span>by {by} </span>
				<span>{getConvertedDate(time)}</span>
			</footer>
		</div>
	</div>
);

export default StoryItem;