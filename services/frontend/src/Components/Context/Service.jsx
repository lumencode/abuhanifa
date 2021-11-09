import { createContext } from 'react'

const Context = createContext()

function ServiceProvider({ children, }) {

	return (
		<Context.Provider value="http://192.168.53.126:8080">
			{ children }
		</Context.Provider>
	)
}

export {
	Context,
	ServiceProvider,
}
