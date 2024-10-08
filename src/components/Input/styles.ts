import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;

	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
	color: ${({ theme }) => theme.COLORS.GRAY_300};

	border-radius: 10px;

	> input {
		height: 40px;
		width: 100%;
		padding: 16px;

		color: ${({ theme }) => theme.COLORS.WHITE};
		background: transparent;
		border: 0;

		&::placeholder {
			color: ${({ theme }) => theme.COLORS.GRAY_300};
		}
	}
`;
export const ErrorMessage = styled.div`
	color: red;
	font-size: 10px;
	margin-top: 0;
`;
