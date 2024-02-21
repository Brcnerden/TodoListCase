import CheckCircle from "../../assets/Icons/CheckCircle";
import Trash from "../../assets/Icons/Trash";
import { Text } from "../Text/Text";
import * as T from "./TodoItemstyled";

export const TodoItem = ({ text, handleDone, id, isDone, handleDelete }) => {
  return (
    <T.Box>
      <T.TextContent>
        <Text>{text}</Text>
      </T.TextContent>
      <div>
        <T.Buttons onClick={() => handleDelete(id)}>
          <Trash />
        </T.Buttons>
        <T.CheckButton isDone={isDone} onClick={() => handleDone(id)}>
          <CheckCircle />
        </T.CheckButton>
      </div>
    </T.Box>
  );
};
