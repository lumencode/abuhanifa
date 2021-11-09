import { useState, useEffect } from 'react'

import useService from '../Hooks/useService'

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

	const serviceURL = useService()

	const [pathways, setPathways] = useState([])

	const [loading, setLoading] = useState(true)

	useEffect(() => {

		;(async () => {

			try {
				const response = await fetch(serviceURL + '/pathways/')

				if (response.status >= 200 && response.status <= 299) {

					const json = await response.json()

					setLoading(false)
					setPathways(() => json)
				}
				else {
					throw new Error(response.statusMessage || response.status)
				}
			}
			catch(err) {
				console.log("mana xato", err)
			}

		})()

	}, [
		serviceURL,
	])

	return (
		<>
			<Header>
				<Navigation />
			</Header>
			<Main>

				{ loading && <h1>loading...</h1> }

				<StyledWrapper>
					<StyledUl>
						{
							pathways.map(pathway => (
								<StyledLi
									key={ pathway.id }
								>
									<Pathway
										pathwayId={ pathway.id }
										name={ pathway.name }
										coursesCount="4"
									/>
								</StyledLi>
							))
						}
					</StyledUl>
				</StyledWrapper>
			</Main>
			<Footer />
		</>
	)
}

export default Pathways
