
import {IActionProps,IStateProps,TodoFooter } from '../components/TodoFooter';
import app from '../models/app';
import { eduxoConnect } from '../models/Eduxo';

export default eduxoConnect<IStateProps,IActionProps>((state)=>{
    const todosLength = state.todo.todos.length;
    const numberCompleted = state.todo.todos.filter((t:any)=>t.completed).length;
    return {
        displayMode: state.todo.displayMode,
        numberTodosLeft: todosLength - numberCompleted,
        showClearCompletedButton: numberCompleted > 0,
    }
}, {
    onPressClearCompleted: app.getDispatcher().todo.removeCompleted
})(TodoFooter) as any;
