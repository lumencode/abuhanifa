import './App.css'

import { Routes, Route } from 'react-router-dom'

import Pathways from './Components/Pages/Pathways'
import Courses from './Components/Pages/Courses'

function App () {

	return (
		<Routes>
			<Route path="/" element={ <Pathways /> } />
			<Route path="/courses/pathway/:pathwayId" element={ <Courses /> } />
		</Routes>
	)
}

export default App
