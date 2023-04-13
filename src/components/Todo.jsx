import {useState} from "react";
import {useSelector} from "react-redux";
import {operationsReducer} from "../redux/todo/reducers/operations.js";

export function Todo() {

    const todos = useSelector((state) => state.operationsReducer);


    return (todos.map((todo)=>(
          <div key={todo.id}>
              <div>
                  <p style={todo.status===true?{textDecoration:"line-through"}:{textDecoration:"none"}}>{todo.task}</p>
              </div>
              <div>

              </div>
          </div>
        )
    ))

}