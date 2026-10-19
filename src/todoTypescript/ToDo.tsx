import {useState} from 'react';

interface TodoListItem {
  id: number;
  item: string;
  itemDescription: string;
  createdOn: Date;
  isCompleted: boolean;
}
export default function ToDo(){
    const [taskValue,setTaskValue]=useState();
    const [todoList,setTodoList]=useState<TodoListItem[]>([])
    return(
        <div>
            <h1>Todo List</h1>
            <input type="text" name="item" id="item" placeholder="enter task"/>
            <button>Add New Item</button>
        </div>
    )
}