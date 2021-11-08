import styled from 'styled-components'

import LogoIcon from '../Icons/Logo'
import BookIcon from '../Icons/Book'
import IslamIcon from '../Icons/Islam'
import CertificateIcon from '../Icons/Certificate'
import IdentityIcon from '../Icons/Identity'

const StyledNavigation = styled.nav`
`

const StyledWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	max-width: 80rem;
	margin: 0 auto;
	gap: 2rem;
	padding: 3rem 2rem;

	@media screen and (max-width: 60rem) {
		flex-direction: column;
		align-items: stretch;
		padding: 2rem 1rem;
	}
`

const StyledMenu = styled.ul`
	list-style-type: none;
	display: flex;
	gap: 2rem;
	@media screen and (max-width: 60rem) {
		flex-direction: column;
		align-items: stretch;
	}
`

const StyledToolbar = styled.ul`
	list-style-type: none;
	display: flex;
	gap: 2rem;
	@media screen and (max-width: 60rem) {
		flex-direction: row-reverse;
		& > li:last-child {
			flex-grow: 1;
		}
	}
`

const StyledButton = styled.button`
	font-size: 1.2rem;
	color: #9f9f9f;
	text-transform: uppercase;
	display: flex;
	border: none;
	background: transparent;
	align-items: center;
	gap: 1rem;
	cursor: pointer;
	&:hover {
		color: white;
	}
	& > svg {
		fill: currentColor;
		width: 1.5rem;
		height: 1.5rem;
	}
	@media screen and (max-width: 60rem) {
		font-size: 1rem;
		width: 100%;
	}
`

function Navigation () {

	return (
		<StyledNavigation>
			<StyledWrapper>
				<StyledMenu>
					<li>
						<StyledButton>
							<LogoIcon />
							<span>Home</span>
						</StyledButton>
					</li>
					<li>
						<StyledButton>
							<BookIcon />
							<span>Courses</span>
						</StyledButton>
					</li>
					<li>
						<StyledButton>
							<IslamIcon />
							<span>Academy</span>
						</StyledButton>
					</li>
					<li>
						<StyledButton>
							<CertificateIcon />
							<span>Certification</span>
						</StyledButton>
					</li>
				</StyledMenu>
				<StyledToolbar>
					<li>
						<StyledButton>
							<IdentityIcon />
							<span>Account</span>
						</StyledButton>
					</li>
				</StyledToolbar>
			</StyledWrapper>
		</StyledNavigation>
	)
}

export default Navigation
