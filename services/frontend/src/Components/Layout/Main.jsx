import styled from 'styled-components'

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
`

function Main ({ children, }) {

	return (
		<StyledMain>
			{ children }
		</StyledMain>
	)
}

export default Main
