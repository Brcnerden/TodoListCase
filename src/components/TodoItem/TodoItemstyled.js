import styled from "@emotion/styled";
import colors from "../../constants/colors";

const Box = styled.div`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  height: 57px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 13px;
  background-color: ${colors.white};
  border-radius: 5px;
  padding: 0 20px;
  margin-bottom: 20px;
`;
const TextContent = styled.div`
  overflow: hidden;

  flex: 1;
  > p {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const Text = styled.div`
  font-size: 20px;
`;

const Buttons = styled.button`
  > svg {
    margin-right: 10px;
  }
`;

const CheckButton = styled.button`
  > svg > * {
    fill: ${({ isDone }) => (isDone ? colors.green : colors.ghosted)};
  }
`;

export { Box, Text, Buttons, TextContent, CheckButton };
