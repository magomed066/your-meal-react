import React from 'react'
import styles from './index.module.scss'
import { ProductListItem } from '../product-item'

export const ProductList = (props: any) => {
	return (
		<div className={styles.products}>
			<h3 className={styles['products__title']}>Бургеры</h3>

			<div className={styles['products-list']}>
				<ProductListItem />
				<ProductListItem />
				<ProductListItem />
				<ProductListItem />
			</div>
		</div>
	)
}
