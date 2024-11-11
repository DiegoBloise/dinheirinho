import { styled } from "styled-components";

export const Container = styled.div`
	max-width: 100%;
	height: 10rem;
	background-color: var(--blue);
`;

export const Content = styled.section`
	max-width: 1120px;
	height: 10rem;
	margin: 0 auto;
	padding: 0 2rem;

	display: flex;
	align-items: center;
	justify-content: space-between;

	button {
		background-color: var(--blue-light);
		color: var(--shape);
		padding: 0.5rem 1.5rem;
		border: 1px solid var(--blue-light);
		border-radius: 0.3rem;
		transition: 0.2s;
	}

	button:hover {
		border: 1px solid var(--shape);
	}

	button:active {
		background-color: var(--blue);
		border: 1px solid var(--shape);
	}
`;
