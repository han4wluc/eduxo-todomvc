
import {IActionProps,IStateProps,TodoHeader } from '../components/TodoHeader';
import app from '../models/app';
import { eduxoConnect } from '../models/Eduxo';

export default eduxoConnect<IStateProps,IActionProps>((state)=>{
    return {
        textValue: state.todo.textValue
    }
}, {
    onChangeText: app.getDispatcher().todo.onChangeTextValue,
    onPressEnter: app.getDispatcher().todo.addTodo,
    onPressExit: app.getDispatcher().todo.clearInput,
})(TodoHeader) as any;
