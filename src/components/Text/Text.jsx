import * as T from "./Textstyled";
export const Text = ({ isBold, size, color, children, ...props }) => {
  return (
    <T.StyledText isBold={isBold} size={size} color={color} {...props}>
      {children}
    </T.StyledText>
  );
};
