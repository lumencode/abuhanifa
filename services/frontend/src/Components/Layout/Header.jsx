import styled from 'styled-components'

const StyledHeader = styled.header`
`

function Header ({ children, }) {

	return (
		<StyledHeader>
			{ children }
		</StyledHeader>
	)
}

export default Header
