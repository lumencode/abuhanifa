import styled from 'styled-components'

import Header from '../Layout/Header'
import Navigation from '../Layout/Navigation'
import Main from '../Layout/Main'
import Footer from '../Layout/Footer'

import Pathway from '../Pathway/Pathway'

const StyledWrapper = styled.div`
	font-size: 2rem;
	line-height: 1.5;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	width: 100%;
	max-width: 80rem;
	margin: 0 auto;
	padding: 0 2rem;
	@media screen and (max-width: 60rem) {
		padding: 0 1rem;
	}
`

const StyledUl = styled.ul`
	list-style-type: none;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`

function Pathways() {

	return (
		<>
			<Header>
				<Navigation />
			</Header>
			<Main>
				<StyledWrapper>
					<StyledUl>
						<li>
							<Pathway
								name="Pathway #1"
								coursesCount="7"
							/>
						</li>
					</StyledUl>
				</StyledWrapper>
			</Main>
			<Footer />
		</>
	)
}

export default Pathways
