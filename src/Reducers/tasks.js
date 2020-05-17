import * as types from './../Constants/ActionTypes'
var findIndex = (tasks,name) => {
    var result = -1;
    tasks.forEach((task,index) =>{
        if(task.name === name){
            result = index
        }
    });
    return result;
}
var data = JSON.parse(localStorage.getItem('tasks'));
var initialState = data ? data : [];
// var initialState =  [];
var myReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.LIST_ALL:
            return state;
        case types.ADD_TASK:
            var newTask = {
                name : action.task.name,
            }
            state.push(newTask);
            localStorage.setItem('tasks',JSON.stringify(state))
            return [...state];
        case types.DELETE_TASK :
            var name = action.name;
            var index = findIndex(state,name)
            state.splice(index,1);
            localStorage.setItem('tasks',JSON.stringify(state))
            return [...state];
        default: return state;
    }
}
export default myReducer