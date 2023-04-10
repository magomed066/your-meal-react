import { ProductList } from '@/entities/product'
import { Categories, Header } from '@/shared/ui'
import styles from './index.module.scss'
import { Cart } from '@/entities/cart'

const Home = () => {
	return (
		<main>
			<Header />

			<div className="container">
				<Categories />

				<div className={styles.content}>
					<Cart />
					<ProductList />
				</div>
			</div>
		</main>
	)
}

export default Home
