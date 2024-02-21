import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { Text } from "../../components/Text/Text";
import { TodoItem } from "../../components/TodoItem/TodoItem";

import * as T from "./Todosstyled";

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    if (inputValue.length > 0) {
      const newTodo = { text: inputValue, id: uuidv4(), isDone: false };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  const handleDone = (id) => {
    const updatedTodos = todos.map((item) => {
      if (id === item.id) {
        item.isDone = !item.isDone;
      }
      return item;
    });

    setTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((item) => item.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <T.Container>
      <Text isBold="isBold" size="40" color="khaki" as="h2">
        MY TO DO LIST
      </Text>
      <Input value={inputValue} type="text" onChange={handleChange} />
      <Button onClick={handleClick} text="Save" />
      {todos.map(({ text, id, isDone }) => (
        <TodoItem
          text={text}
          key={id}
          id={id}
          handleDone={handleDone}
          handleDelete={handleDelete}
          isDone={isDone}
        />
      ))}
    </T.Container>
  );
};
