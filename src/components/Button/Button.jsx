import * as B from "./Buttonstyled";

export const Button = ({ text, onClick }) => {
  return <B.StyledButton onClick={onClick}>{text}</B.StyledButton>;
};
