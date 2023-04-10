import React from 'react'
import styles from './index.module.scss'

import Photo from '@/assets/burger.jpg'

export const ProductListItem = (props: any) => {
	return (
		<div className={styles.card}>
			<img className={styles['card__image']} src={Photo} alt="burger-product" />

			<div className={styles['card-body']}>
				<h3 className={styles['card-body__title']}>689₽</h3>
				<p className={styles['card-body__sub']}>Мясная бомба</p>

				<p className={styles['card-body__info']}>520г</p>
			</div>

			<button className={styles['card__button']}>Добавить</button>
		</div>
	)
}
