import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {operationsReducer} from "../redux/todo/reducers/operations.js";
import Icon, {icon} from "react-icons-kit"
import {trash} from "react-icons-kit/feather/trash"
import {edit2} from "react-icons-kit/feather/edit2"
import {AddTodo} from "./AddTodo.jsx";
import {delall} from "../redux/todo/actions/index.js";


export function Todo() {

    const todos = useSelector((state) => state.operationsReducer);
    const disp = useDispatch();

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
                  <Icon icon={trash}></Icon>
                  <Icon icon={edit2}></Icon>

              </div>
          </div>
        )
    )}
            <button className="btn btn-primary" onClick={()=>disp(delall())}>Delete</button>
        </div>)

}