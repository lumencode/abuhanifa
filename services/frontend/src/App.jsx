import './App.css'

import { Routes, Route } from 'react-router-dom'

import Pathways from './Components/Pages/Pathways'

function App () {

	return (
		<Routes>
			<Route path="/" element={ <Pathways /> } />
		</Routes>
	)
}

export default App
