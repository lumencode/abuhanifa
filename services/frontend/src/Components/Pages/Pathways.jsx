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
	gap: 4rem 2rem;
	flex-wrap: wrap;
	@media screen and (max-width: 60rem) {
		flex-direction: column;
	}
`

const StyledLi = styled.li`
	width: calc((100% - 2rem) / 2);
	@media screen and (max-width: 60rem) {
		width: 100%;
	}
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
						<StyledLi>
							<Pathway
								pathwayId="1"
								name="Become a Back-End Developer"
								coursesCount="4"
							/>
						</StyledLi>
						<StyledLi>
							<Pathway
								pathwayId="2"
								name="Become a Front-End Developer"
								coursesCount="1"
							/>
						</StyledLi>
					</StyledUl>
				</StyledWrapper>
			</Main>
			<Footer />
		</>
	)
}

export default Pathways
