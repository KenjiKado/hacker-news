import React from 'react';
import { getConvertedDate } from '../../../helpers/dateTimeHelper';
import { formatUrl } from '../../../helpers/stringHelper';
import { IJob } from '../../../types/IJob';
import cx from 'classnames';

import styles from './jobItem.module.scss';

interface IProps extends IJob {
	loading: boolean;
}

const JobItem = ({ by, score, title, url, time, loading }: IProps) => (
	<div className={styles.jobItem}>
		<header className={cx({ [styles.loading]: loading })}>
			<h3>{title}</h3>
			{url && <span>(<a
				href={url}
				target='_blank'
				rel='noreferrer'
			>{formatUrl(url)}</a>)</span>}
		</header>
		<footer className={cx({ [styles.loading]: loading })}>
			<span>{score} points </span>
			<span>by {by} </span>
			<span>{getConvertedDate(time)}</span>
		</footer>
	</div>
);

export default JobItem;
