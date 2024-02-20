import * as L from "./Layoutstyled";

export const Layout = ({ children }) => {
  return (
    <L.PageContainer>
      <L.Container>{children}</L.Container>
    </L.PageContainer>
  );
};
