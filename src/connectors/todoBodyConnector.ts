
import {IActionProps,IStateProps,TodoBody } from '../components/TodoBody';
// import app from '../models/app';
import { eduxoConnect } from '../models/Eduxo';

export default eduxoConnect<IStateProps,IActionProps>((state)=>{
    return {
        todos: state.todo.todos
    }
}, {})(TodoBody) as any;
