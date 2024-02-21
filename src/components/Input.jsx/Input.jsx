import * as I from "./InputStyled";

export const Input = ({ ...props }) => {
  return <I.StyledInput placeholder="What is the task today?" {...props} />;
};
