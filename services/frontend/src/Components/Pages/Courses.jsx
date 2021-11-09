import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import useService from '../Hooks/useService'

import styled from 'styled-components'

import Header from '../Layout/Header'
import Navigation from '../Layout/Navigation'
import Main from '../Layout/Main'
import Footer from '../Layout/Footer'

import Course from '../Course/Course'

const StyledWrapper = styled.div`
	font-size: 2rem;
	line-height: 1.5;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	width: 100%;
	max-width: 80rem;
	margin: 0 auto;
	padding: 1rem 2rem;
	@media screen and (max-width: 60rem) {
		padding: 0 1rem;
	}
`

const StyledUl = styled.ul`
	list-style-type: none;
	display: flex;
	flex-wrap: wrap;
	gap: 4rem 2rem;
	@media screen and (max-width: 60rem) {
		gap: 3rem 1rem;
	}
`

const StyledLi = styled.li`
	width: calc((100% - 6rem) / 4);
	@media screen and (max-width: 60rem) {
		width: calc((100% - 1rem) / 2);
	}
`

function Courses() {

	const serviceURL = useService()

	const [courses, setCourses] = useState([])

	const [loading, setLoading] = useState(true)

	const { pathwayId } = useParams()

	useEffect(() => {

		;(async () => {

			try {
				const response = await fetch(serviceURL + '/courses/pathway/' + pathwayId)

				if (response.status >= 200 && response.status <= 299) {

					const json = await response.json()

					setLoading(false)
					setCourses(() => json)
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
		pathwayId,
	])

	return (
		<>
			<Header>
				<Navigation />
			</Header>
			<Main>
				{ loading }
				<StyledWrapper>
					<StyledUl>
						{
							courses.map(course => (
								<StyledLi
									key={ course.id }
								>
									<Course
										courseId={ course.id }
										cover={ course.coverPath }
										name={ course.name }
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

export default Courses
