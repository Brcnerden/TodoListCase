import styled from "@emotion/styled";
import colors from "../../constants/colors";

const StyledInput = styled.input`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  width: 100%;
  padding: 0 20px;
  height: 57px;
  background-color: ${colors};
  color: ${colors.gray};
  border-radius: 5px;
  font-size: 20px;
`;

export { StyledInput };
