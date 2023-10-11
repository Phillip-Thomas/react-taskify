import { Todo } from './model';

type Actions =
    | { type: "done"; payload: number }
    | { type: "delete"; payload: number }
    | { type: "add"; payload: string }
    | { type: "edit"; payload: { id: number; todo: string } };

const Reducer = (state: Todo[], action: Actions) => {
    switch (action.type) {
        case "done":
            return state.map((todo) => todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo);
        case "delete":
            return state.filter((todo) => todo.id !== action.payload);
        case "add":
            return [...state, { id: Date.now(), todo: action.payload, isDone: false }];
        case "edit":
            return state.map((todo) => todo.id === action.payload.id ? { ...todo, todo: action.payload.todo } : todo);
        default:
            return state;
    }
}

export default Reducer;
