import React from 'react';
import { IJob } from '../../types/IJob';
import JobItem from './JobItem';

import styles from './jobsList.module.scss';

interface IProps {
	list: IJob[];
	loading: boolean;
}
const JobsList = ({ list, loading }: IProps) => (
	<div className={styles.listContainer}>
		{list.map(job => <JobItem {...job} loading={loading} key={job.id} />)}
	</div>
);

export default JobsList;