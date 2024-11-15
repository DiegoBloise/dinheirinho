import { styled } from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
	h2 {
		color: var(--text-title);
		font-size: 1.5rem;
		margin-bottom: 2rem;
	}

	input {
		width: 100%;
		padding: 0 1.5rem;
		height: 4rem;

		background: #e7e9ee;

		border: 1px solid #d7d7d7;
		border-radius: 0.25rem;

		font-weight: 400;
		font-size: 1rem;

		&::placeholder {
			color: var(--text-body);
		}

		& + input {
			margin-top: 1rem;
		}
	}

	button[type="submit"] {
		width: 100%;
		padding: 0 1.5rem;
		height: 4rem;
		background: var(--green);
		color: #fff;
		border: 0;
		border-radius: 0.25rem;
		font-size: 1rem;
		margin-top: 1.5rem;
		font-weight: 600;

		transition: filter 0.2s;

		&:hover {
			filter: brightness(0.9);
		}
	}
`;

export const TransactionTypeContainer = styled.div`
	margin: 1rem 0;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 0.5rem;
`;

interface RadioBoxProps {
	active: boolean;
	transaction: "deposit" | "withdraw";
}

const colors = {
	deposit: "#33CC95",
	withdraw: "#E52E4D",
};

export const RadioBox = styled.button<RadioBoxProps>`
	height: 4rem;
	border: 1px solid #d7d7d7;
	border-radius: 0.25rem;

	background: ${(props) => {
		return props.active
			? transparentize(0.9, colors[props.transaction])
			: "transparent";
	}};

	border-color: ${(props) => {
		return props.active ? colors[props.transaction] : "#d7d7d7";
	}};

	display: flex;
	align-items: center;
	justify-content: center;

	transition: border-color background-color 0.2s;

	&:hover {
		border-color: ${(props) => {
			return props.active ? "" : darken(0.1, "#d7d7d7");
		}};
	}

	span {
		display: inline-block;
		margin-right: 1rem;
		font-size: 1rem;
		color: var(--text-title);
	}
`;
