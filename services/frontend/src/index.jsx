import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

import { BrowserRouter } from 'react-router-dom'

import { ServiceProvider } from './Components/Context/Service'

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<ServiceProvider>
				<App />
			</ServiceProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
)

serviceWorkerRegistration.unregister()
