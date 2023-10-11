import React from 'react'
import { Todo } from './model';
import SingleTodo from "./SingleTodo";
import "./style.css";
import Reducer from './Reducer';
import { Droppable } from 'react-beautiful-dnd';


interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos: Todo[];
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({todos,setTodos, completedTodos, setCompletedTodos }: Props) => {
  return (
    <div className="container"> 
    <Droppable droppableId="TodosList">
      {
         (provided, snapshot) => (
          <div
          className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
          ref={provided.innerRef} 
          {...provided.droppableProps}>

            <span className="heading">
              Active Tasks
            </span>

            {
              todos.map((todo, index) => (
                !todo.isDone && <SingleTodo index={index} todo={todo} todos={todos} setTodos={setTodos} key={todo.id}/>
              ))
            }
            {provided.placeholder}
    
        </div>
         )
        }
    </Droppable>

    <Droppable droppableId="TodosRemove">

      {
        (provided, snapshot) => (
          <div            
          className={`todos  ${ snapshot.isDraggingOver ? "dragcomplete" : "remove"}`} 
          ref={provided.innerRef} 
          {...provided.droppableProps}>

            <span className="heading">
              Completed Tasks
            </span>

            {
              completedTodos.map((todo, index) => (
                todo.isDone && <SingleTodo index={index} todo={todo} todos={completedTodos} setTodos={setCompletedTodos} key={todo.id}/>
              ))
            }
            {provided.placeholder}
  
        </div>
        )
      }
    </Droppable>

    </div>
  )
};

export default TodoList
