import React, { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";
import { Button, Table } from "reactstrap";

function TableList() {
  const { todos, completeTodo, removeTodo } = useContext(TodosContext);
  return (
    <Table>
      <tbody>
        {todos &&
          todos.map((todo, index) => (
            <tr key={index}>
              <th
                className="text-start"
                style={{
                  textDecoration: todo.complete ? "line-through" : "",
                }}
              >
                {todo.text}
              </th>
              <td className="text-end">
                <Button
                  color={todo.complete ? "secondary" : "success"}
                  className="me-2"
                  onClick={() => completeTodo(index)}
                >
                  {todo.complete ? "Done" : "Not yet"}
                </Button>
                <Button color="danger" onClick={() => removeTodo(index)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}

export default TableList;
