import { createSlice } from '@reduxjs/toolkit';


//INITIAL STATE
const initialState = {  //lazm tb2a object
    todos: [
        // {
        //     title: "learn node js",
        //     content: "Lorem ipsum dolor sit amet.",
        //   },
        //   {
        //     title: "go to the sea",
        //     content: "Lorem ipsum dolor sit amet.",
        //   },
        //   {
        //     title: "walk the dog",
        //     content: "Lorem ipsum dolor sit amet.",
        //   }
    ]
    
}

 const todoSlice  = createSlice({
    name: 'todo',
    initialState,
    reducers: {
      addTodo: (state , action) =>{
        state.todos.push(action.payload);
      },
      deleteTodo: (state , action) => {
        state.todos = state.todos.filter(
            (item,index)=> index !== action.payload
        );
      },
    },
  });

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;