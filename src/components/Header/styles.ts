import { styled } from "styled-components";

export const Container = styled.div`
	max-width: 100%;
	height: 15rem;
	padding: 2rem;
	background-color: var(--blue);

	@media (max-width: 768px) {
		margin-bottom: 2rem;
	}
`;

export const Content = styled.section`
	max-width: 1120px;
	margin: auto;
	height: 10rem;
	padding: 0 2rem;

	display: flex;
	align-items: start;
	justify-content: space-between;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		gap: 1.5rem;
	}

	button {
		background-color: var(--blue-light);
		color: var(--shape);
		padding: 0.5rem 1.5rem;
		border: 1px solid var(--blue-light);
		border-radius: 0.3rem;

		transition: filter 0.2s;

		&:hover {
			border: 1px solid var(--shape);
		}

		&:active {
			filter: brightness(0.8);
			border: 1px solid var(--shape);
		}
	}
`;
