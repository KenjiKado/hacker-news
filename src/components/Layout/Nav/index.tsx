import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './nav.module.scss';

const Nav = () => (
	<nav className={styles.navbar}>
		<ul className={styles.nav}>
			<li>
				<NavLink
					to='/new'
					className={({ isActive }) => isActive ? styles.active : ''}
				>
					New
				</NavLink>
			</li>
			<li>
				<NavLink
					to='/best'
					className={({ isActive }) => isActive ? styles.active : ''}
				>
					Best
				</NavLink>
			</li>
			<li>
				<NavLink
					to='/jobs'
					className={({ isActive }) => isActive ? styles.active : ''}
				>
					Jobs
				</NavLink>
			</li>
		</ul>
	</nav>
);

export default Nav;