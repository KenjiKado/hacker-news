import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav';

import styles from './header.module.scss';

const Header = () => (
	<header className={styles.header}>
		<div className={styles.container}>
			<Link to='/' className={styles.logo}>
				Hacker News
			</Link>
			<Nav />
		</div>
	</header>
);

export default Header;