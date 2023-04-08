import React from 'react'
import styles from './index.module.scss'

import icons from '@/assets/icons.svg'

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles['header-logo']}>
				{/* <span className={styles['header-logo__text']}>YourMeal</span> */}

				<svg className={styles['header-logo__icon']}>
					<use xlinkHref={`${icons}#logo`}></use>
				</svg>
			</div>

			<div className={styles['intro']}>
				<div className={styles['intro-img']}>
					<svg className={styles['intro-img__item']}>
						<use xlinkHref={`${icons}#burger`}></use>
					</svg>
				</div>

				<div className={styles['intro-info']}>
					<h2 className={styles['intro-info__title']}>
						Только самые <span>сочные бургеры!</span>
					</h2>
					<p className={styles['intro-info__text']}>
						Бесплатная доставка от 599₽
					</p>
				</div>
			</div>

			<div className={styles.oval}></div>
		</header>
	)
}
