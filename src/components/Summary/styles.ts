import { styled } from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1.5rem;
	margin-top: -7.5rem;

	.card {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 10rem;

		background-color: var(--shape);
		padding: 2rem;
		border-radius: 0.5rem;

		header {
			display: flex;
			flex-direction: row;
			justify-content: space-between;

			margin-bottom: 1rem;
		}

		strong {
			font-size: xx-large;
			font-weight: 600;
			color: var(--text-title);
		}
	}

	.card-total {
		background-color: var(--green);
		color: white;

		strong {
			color: var(--background);
		}
	}
`;
