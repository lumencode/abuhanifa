import styled from 'styled-components'

const StyledFooter = styled.footer`
	font-size: 1.2rem;
	color: #4f4f4f;
	@media screen and (max-width: 60rem) {
		font-size: 1rem;
	}
`

const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 80rem;
	margin: 0 auto;
	padding: 2rem;
	@media screen and (max-width: 60rem) {
		padding: 1rem;
	}
`

function Footer () {

	return (
		<StyledFooter>
			<StyledWrapper>
				&copy; Imam Abu Hanifa International Islamic Academy
			</StyledWrapper>
		</StyledFooter>
	)
}

export default Footer
