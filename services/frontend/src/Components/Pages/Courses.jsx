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
							<Course
								courseId="1"
								cover="/cover1.jpg"
								name="Decode the Coding Interview in Go: Real-World Examples"
							/>
						</StyledLi>
						<StyledLi>
							<Course
								courseId="2"
								cover="/cover2.jpg"
								name="Write Professional Command-line Programs in Go"
							/>
						</StyledLi>
						<StyledLi>
							<Course
								courseId="5"
								cover="/cover5.jpg"
								name="Mastering Concurrency in Go"
							/>
						</StyledLi>
						<StyledLi>
							<Course
								courseId="4"
								cover="/cover4.jpg"
								name="An Introduction to Programming in Go"
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
