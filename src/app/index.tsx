import { Routing } from '@/pages'
import { withProviders } from './providers'
import './scss/index.scss'

const App = () => <Routing />

export default withProviders(App)
