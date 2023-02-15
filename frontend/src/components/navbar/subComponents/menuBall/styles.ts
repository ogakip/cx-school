import styled from 'styled-components';

export const Container = styled.div`
	width: 70px;
	height: 70px;
	background-color: var(--secondary-color);
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 100%;
	position: fixed;
	top: 20px;
	left: -70px;
	z-index: 2;
	cursor: pointer;
	transition: 0.3s all ease;

	:hover {
		filter: brightness(1.3);
	}
`;
