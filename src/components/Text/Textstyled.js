import styled from "@emotion/styled";
import colors from "../../constants/colors";

const StyledText = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: ${({ isBold }) => (isBold ? 700 : 400)};
  font-style: normal;
  font-size: ${({ size }) => size || 20}px;
  color: ${({ color }) => colors[color] || colors.semiBlack};
`;

export { StyledText };
