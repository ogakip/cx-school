import styled from 'styled-components';

export const Container = styled.li`
	width: 70px;
	height: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	background-color: var(--primary);
	border-radius: 100%;
	transition: 0.3s all ease;

	:hover {
		filter: brightness(1.3);
	}
`;
