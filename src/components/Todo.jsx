import {useState} from "react";
import {useSelector} from "react-redux";
import {operationsReducer} from "../redux/todo/reducers/operations.js";
import Icon, {icon} from "react-icons-kit"
import {trash} from "react-icons-kit/feather/trash"
import {edit2} from "react-icons-kit/feather/edit2"
import {AddTodo} from "./AddTodo.jsx"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

export function Todo() {

    const todos = useSelector((state) => state.operationsReducer);


    return (
        <div>
            <AddTodo />
            {todos.map((todo)=>(
          <div key={todo.id}>
              <input type="checkbox" checked={todo.status}></input>
              <div>
                  <p style={todo.status===true?{textDecoration:"line-through"}:{textDecoration:"none"}}>{todo.task}</p>
              </div>
              <div>
                  <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>

              </div>
          </div>
        )
    )}
        </div>)

}