import styled from 'styled-components'

import { useNavigate } from 'react-router-dom'

import RightIcon from '../Icons/Right'
import BrowserIcon from '../Icons/Browser'

const StyledDiv = styled.div`
	background: rgba(255,255,255,0.6);
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	padding: 2rem;
	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 100%;
		z-index: -1;
		border-radius: 0.5rem;
	}
	&::after {
		-webkit-mask: radial-gradient(100% 80% at bottom,#fff 79.5%,transparent 80%) left,radial-gradient(100% 80% at top,transparent 79.5%,#fff 80%) right;
		mask: radial-gradient(100% 80% at bottom,#fff 79.5%,transparent 80%) left,radial-gradient(100% 80% at top,transparent 79.5%,#fff 80%) right;
		-webkit-mask-size: 50.1% 100%;
		-webkit-mask-repeat: no-repeat;
		mask-size: 50.1% 100%;
		mask-repeat: no-repeat;
		content: "";
	    position: absolute;
	    top: 0;
	    left: 0;
	    right: 0;
	    height: 100%;
	    z-index: -1;
	    border-radius: 0.5rem;
	}
	@media screen and (max-width: 60rem) {
		gap: 1rem;
		padding: 1.5rem;
	}
`

const StyledBottom = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
	@media screen and (max-width: 60rem) {
		flex-direction: column;
		align-items: stretch;
	}
`

const StyledH1 = styled.h1`
	font-size: 2rem;
	font-weight: normal;
	color: black;
	-webkit-box-reflect: below -1.3rem linear-gradient(180deg,transparent,rgba(0,0,0,.2));
	@media screen and (max-width: 60rem) {
		font-size: 1.4rem;
		-webkit-box-reflect: below -1rem linear-gradient(180deg,transparent,rgba(0,0,0,.2));
	}
`

const StyledDescription = styled.p`
	font-size: 1.3rem;
	line-height: 1.6;
	color: black;
	display: flex;
	align-items: center;
	@media screen and (max-width: 60rem) {
		font-size: 1.1rem;
	}
`

const StyledButton = styled.button`
	position: relative;
	font-size: 1.4rem;
	color: black;
	display: flex;
	align-items: center;
	border: none;
	background: transparent;
	gap: 1rem;
	cursor: pointer;
	&:hover {
		color: white;
	}
	& > svg {
		fill: currentColor;
		width: 2rem;
		height: 2rem;
	}
	@media screen and (max-width: 60rem) {
		font-size: 1.3rem;
		justify-content: space-between;
		& > svg {
			width: 1.5rem;
			height: 1.5rem;
		}
	}
`

const StyledP = styled.p`
	font-size: 1rem;
	color: black;
	display: flex;
	align-items: center;
	& > svg {
		fill: currentColor;
		width: 2rem;
		height: 2rem;
		margin-right: 1rem;
	}
	@media screen and (max-width: 60rem) {
		& > svg {
			width: 1.5rem;
			height: 1.5rem;
		}
	}
`

const StyledSpan = styled.span`
	font-weight: bold;
	margin-left: 0.2rem;
`

function Pathway ({ pathwayId, name, coursesCount, }) {

	const navigate = useNavigate()

	return (
		<StyledDiv>
			<StyledH1>{ name }</StyledH1>
			<StyledDescription>
				Welcome to the Go Algorithms Crash Course! In this course, we are going to be covering some of the most common sorting and searching algorithms in Go.
			</StyledDescription>
			<StyledBottom>
				<StyledP>
					<BrowserIcon />
					<span>Courses:</span>
					<StyledSpan>{ coursesCount }</StyledSpan>
				</StyledP>
				<StyledButton
					onClick={ () => navigate('/courses/pathway/' + pathwayId) }
				>
					<span>Browse Courses</span>
					<RightIcon />
				</StyledButton>
			</StyledBottom>
		</StyledDiv>
	)
}

export default Pathway
