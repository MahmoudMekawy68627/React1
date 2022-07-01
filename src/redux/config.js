



// action 

export const addTodoAction = (payload)=>{
    return{
        type:"ADD_TODO", // lazem ykon upperCase
        payload: payload
    }
}

export const deleteTodAction = (payload)=> {
    return{
        type: "DELETE",
        payload : payload
    }
}
// initial state

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

// reducer 

export const todoReducer = (state = initialState,action)=>{
    if (action.type === "ADD_TODO"){
        return {... state, todos:[...state.todos,action.payload]}
    }
    if (action.type === "DELETE"){
        return {... state, todos:[...state.todos.filter((item,index) =>{return index !== action.payload})]}
    }
    return state ;
}





/*


*/