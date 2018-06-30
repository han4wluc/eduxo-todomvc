
import {IActionProps,IStateProps,TodoHeader } from '../components/TodoHeader';
import app from '../models/app';
import { eduxoConnect } from '../models/Eduxo';

export default eduxoConnect<IStateProps,IActionProps>((state)=>{
    return {
        textValue: state.todo.textValue
    }
}, {
    onChangeText: app.dispatchers.todo.onChangeTextValue,
    onPressEnter: app.dispatchers.todo.addTodo,
    onPressExit: app.dispatchers.todo.clearInput,
})(TodoHeader) as any;
