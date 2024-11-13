import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],
  onTodoClick:null,
};

function TodoList(props) {
  const { todoList, onTodoClick } = props;
  const handleTodoClick = (todo, index) => {
    if (!onTodoClick) return; //nếu có click thì onTodoClick có hàm
    onTodoClick(todo, index)

  }
  return (
    <div>
      <ul className="todo-list">
        {todoList.map((todo, index) => (
          <li
            key={todo.id}
            className={`todo-item ${
              todo.status === "completed" ? "completed" : ""
            }`}
          onClick={() => handleTodoClick(todo, index)}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
