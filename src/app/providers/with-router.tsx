import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

export const withRouter = (compoent: () => React.ReactNode) => () =>
	(
		<BrowserRouter>
			<Suspense fallback="Loading...">{compoent()}</Suspense>
		</BrowserRouter>
	)
