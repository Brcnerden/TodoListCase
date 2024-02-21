import { Text } from "../../components/Text/Text";
import * as T from "./Todosstyled";

export const Todos = () => {
  return (
    <T.Container>
      <Text isBold="isBold" size="40" color="khaki" as="h2">
        MY TO DO LIST
      </Text>
    </T.Container>
  );
};
