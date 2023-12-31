import ConditionalOutput from "./conditional-output";
import DynamicStyling from "./dynamic-styling";
import JavaScript from "./java-script";
import Styles from "./styles";
import TodoItem from "./todo/todo-item";
import TodoList from "./todo/todo-list";

function Assignment3() {
    return (
      <div>
        <h1>Assignment 3</h1>
        <TodoList />
        <TodoItem />
        <ConditionalOutput />
        <Styles />
        <DynamicStyling />
        <JavaScript />
      </div>
    );
}
export default Assignment3;