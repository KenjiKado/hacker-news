import React from 'react';

import styles from './loader.module.scss';

const Loader = () => (
	<div className={styles.loaderContainer}>
		<div className={styles.loaderOverflow} />
		<span className={styles.loader} />
	</div>
);

export default Loader;