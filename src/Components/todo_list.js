import React from "react";
import "./todo_list.css";


function AddTodo({ setTodos }) {
    const inputRef = React.useRef();

    function handleAddTodo(event) {
        event.preventDefault();
        const text = event.target.elements.newItem.value
        const todo = {
            id: 4,
            text: text,
            done: false,
        }
        setTodos(prevTodos => {
            return prevTodos.concat(todo)
        })
        inputRef.current.value = "";
    }
    return (
        < form className="Todo-form" onSubmit={handleAddTodo} >
            <input id="Todo-form-input" name="newItem" placeholder="Add Task to Your Todo List" ref={inputRef} />
            <button id="Todo-form-submit" type="submit"> Submit </button>
        </form >
    )
}

function DeleteTodo({ todo, setTodos }){
    function handleDeleteTodo() {
        const confirmed = window.confirm("Do you want to delete this?");
        if (confirmed) {
            setTodos((prevTodos) => {
                return prevTodos.filter((t) =>t.id !== todo.id)
                }
            )
        }
    }
    return(
        <span className="Todo-delete-button" role="button" onClick={handleDeleteTodo}>
            X
        </span>
    )
}

function TodoList({ todos, setTodos }) {

    function handleToggleTodo(todo) {
        const updated_done = !todo.done
        // updating the done state of the the particular row in the todos array
        const updatedTodos = todos.map((t) =>
            t.id === todo.id ? {
                ...t, done: updated_done
            } :
                t

        );
        // updated the state of particular todo using the setTodos 
        setTodos(updatedTodos)
    }
    if (todos.length === 0){
        return <p> No Todos Left. </p>;
    }
    return (
        < div className="Todo-list" >
            <h1 className="Todo-title"> Todo List </h1>
            < AddTodo setTodos={setTodos} />
            <ul className="Todo-items">
                {todos.map((todo) => (
                    <li
                        onDoubleClick={() => handleToggleTodo(todo)}
                        className={todo.done ? "Todo-items-status" : ""}
                        key={todo.id}
                    >
                        {todo.text}
                        <DeleteTodo todo={todo} setTodos={setTodos} />
                    </li>
                ))}
            </ul>

        </div >
    )
}



export { TodoList, AddTodo };
