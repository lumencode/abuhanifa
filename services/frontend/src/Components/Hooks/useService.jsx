import { useContext } from 'react'

import { Context } from '../Context/Service'

function useService () {

	return useContext(Context)
}

export default useService

