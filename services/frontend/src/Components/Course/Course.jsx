import styled from 'styled-components'

import { useNavigate } from 'react-router-dom'

const StyledDiv = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	cursor: pointer;
	@media screen and (max-width: 60rem) {
		gap: 0.5rem;
	}
`

const StyledPrice = styled.div`
	background: #f6aa1c;
	color: black;
	font-size: 1rem;
	position: absolute;
	top: -1.2rem;
	right: 1rem;
	border-top-left-radius: 0.3rem;
	border-top-right-radius: 0.3rem;
	padding: 0 0.5rem;
	@media screen and (max-width: 60rem) {
		font-size: 0.9rem;
	}
`

const StyledImg = styled.img`
	width: 100%;
	pointer-events: none;
	border-radius: 0.5rem;
`

const StyledH1 = styled.h1`
	font-size: 1.2rem;
	font-weight: normal;
	color: white;
	display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    @media screen and (max-width: 60rem) {
		font-size: 1.1rem;
		-webkit-line-clamp: 3;
	}
`

const StyledCover = styled.div`
	position: relative;
	z-index: 99;
`

function Course ({ courseId, cover, name, type, }) {

	const navigate = useNavigate()

	return (
		<>
			<StyledDiv
				onClick={ () => navigate('/course/' + courseId) }
			>
				<StyledPrice>FREE</StyledPrice>
				<StyledCover>
					<StyledImg src={ cover } alt="" />
				</StyledCover>
				<StyledH1>{ name }</StyledH1>
			</StyledDiv>
		</>
	)
}

export default Course
