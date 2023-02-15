import styled from 'styled-components';

export const Container = styled.div`
	height: 70px;
	width: 70px;
	border-radius: 100%;
	cursor: pointer;
	transition: 0.3s all ease;
	background-color: var(--primary);
	display: flex;
	justify-content: center;
	align-items: center;

	:hover {
		filter: brightness(1.3);
	}
`;
