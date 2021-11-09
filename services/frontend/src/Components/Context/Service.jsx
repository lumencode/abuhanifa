import { createContext } from 'react'

const Context = createContext()

function ServiceProvider({ children, }) {

	return (
		<Context.Provider value="http://localhost:8080">
			{ children }
		</Context.Provider>
	)
}

export {
	Context,
	ServiceProvider,
}
