import styled from 'styled-components'

import RightIcon from '../Icons/Right'
import BrowserIcon from '../Icons/Browser'

const StyledDiv = styled.div`
	border: 3px solid #2f2f2f;
	border-radius: 0.5rem;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	@media screen and (max-width: 60rem) {
		gap: 1rem;
		padding: 1rem;
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
	color: #9f9f9f;
	-webkit-box-reflect: below -1.5rem linear-gradient(180deg,transparent,rgba(0,0,0,.3));
	@media screen and (max-width: 60rem) {
		font-size: 1.5rem;
	}
`

const StyledDescription = styled.p`
	font-size: 1.5rem;
	line-height: 1.6;
	color: #4f4f4f;
	display: flex;
	align-items: center;
	@media screen and (max-width: 60rem) {
		font-size: 1.2rem;
	}
`

const StyledButton = styled.button`
	font-size: 1.5rem;
	color: #5f5f5f;
	display: flex;
	align-items: center;
	background: transparent;
	border: 2px solid #3f3f3f;
	border-radius: 0.5rem;
	gap: 1rem;
	padding: 1rem 2rem;
	cursor: pointer;
	&:hover {
		color: #7f7f7f;
		border-color: #7f7f7f;
	}
	& > svg {
		fill: currentColor;
		width: 2rem;
		height: 2rem;
	}
	@media screen and (max-width: 60rem) {
		font-size: 1.3rem;
		justify-content: space-between;
		padding: 1rem;
		& > svg {
			width: 1.5rem;
			height: 1.5rem;
		}
	}
`

const StyledP = styled.p`
	font-size: 1rem;
	color: #5f5f5f;
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
	color: #7f7f7f;
	margin-left: 0.2rem;
`

function Pathway ({ name, coursesCount, }) {

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
				<StyledButton>
					<span>Browse Courses</span>
					<RightIcon />
				</StyledButton>
			</StyledBottom>
		</StyledDiv>
	)
}

export default Pathway
