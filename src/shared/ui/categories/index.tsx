import React from 'react'
import styles from './index.module.scss'
import css from 'classnames'

import Burgers from '@/assets/categories/burger.png'
import Snacks from '@/assets/categories/snacks.png'
import HotDogs from '@/assets/categories/hot-dogs.png'
import Combo from '@/assets/categories/combo.png'
import Shaverma from '@/assets/categories/shaverma.png'
import Pizza from '@/assets/categories/pizza.png'
import Wok from '@/assets/categories/wok.png'
import Desserts from '@/assets/categories/desserts.png'
import Sauces from '@/assets/categories/sauсes.png'

export const Categories = () => {
	return (
		<section className={styles.categories}>
			<ul className={styles['categories-list']}>
				<li className={css(styles['categories-list__item'], styles['active'])}>
					<img src={Burgers} alt="burgers" />
					Бургеры
				</li>
				<li className={css(styles['categories-list__item'])}>
					<img src={Snacks} alt="snacks" />
					Закуски
				</li>
				<li className={css(styles['categories-list__item'])}>
					<img src={HotDogs} alt="hot-dogs" />
					Хот-доги
				</li>
				<li className={css(styles['categories-list__item'])}>
					<img src={Combo} alt="combo" />
					Комбо
				</li>
				<li className={css(styles['categories-list__item'])}>
					<img src={Shaverma} alt="shaverma" />
					Шаурма
				</li>
				<li className={css(styles['categories-list__item'])}>
					<img src={Pizza} alt="pizza" />
					Пицца
				</li>
				<li className={css(styles['categories-list__item'])}>
					<img src={Wok} alt="wok" />
					Вок
				</li>
				<li className={css(styles['categories-list__item'])}>
					<img src={Desserts} alt="desserts" />
					Десерты
				</li>
				<li className={css(styles['categories-list__item'])}>
					<img src={Sauces} alt="ыauces" />
					Соусы
				</li>
			</ul>
		</section>
	)
}
