import React from 'react';
import Footer from './Footer';
import Header from './Header';

import styles from './layout.module.scss';
import Loader from './Loader';

interface ILayoutProps {
	isLoading: boolean;
	children: React.ReactNode;
}

const Layout = ({ children, isLoading }: ILayoutProps) => (
	<>
		<Header />
		{isLoading ? <Loader /> :
			<div className={styles.content}>{children}</div>
		}
		<Footer />
	</>
);

export default Layout;