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
		min-width: max-content;

		background-color: var(--shape);
		padding: 2rem;
		border-radius: 0.5rem;
		color: var(--text-title);

		header {
			display: flex;
			align-items: center;
			justify-content: space-between;

			margin-bottom: 1rem;
		}

		strong {
			font-size: 2rem;
			font-weight: 500;
			line-height: 3rem;
		}

		&.card-total {
			background-color: var(--green);
			color: #fff;
		}
	}
`;
