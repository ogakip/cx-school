import styled from 'styled-components';

export const Container = styled.div`
	width: 70px;
	background-color: var(--secondary-color);
	position: fixed;
	top: 50%;
	left: -70px;
	z-index: 2;
	-ms-transform: translateY(-50%);
	transform: translateY(-50%);
	top: 50%;
	transition: 0.3s all ease;
	display: flex;
	flex-direction: column;
	align-items: center;

	border-top-left-radius: 75px;
	border-top-right-radius: 75px;
	border-bottom-left-radius: 75px;
	border-bottom-right-radius: 75px;
`;
