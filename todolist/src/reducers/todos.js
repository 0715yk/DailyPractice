const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case 'TOGGLE_TODO':
            return state.map(todo => {
                return todo.id === action.id ? { ...todo, completed: !todo.completed } : todo;
                // 클릭을 하면(?) 할일 목록이 체크된는 것(completed 값이 변경되면서)
            });
        default:
            return state
    }
}
export default todos
