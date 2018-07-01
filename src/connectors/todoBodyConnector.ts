
import {IActionProps,IStateProps,TodoBody } from '../components/TodoBody';
import app from '../models/app';
import { eduxoConnect } from '../models/Eduxo';

export default eduxoConnect<IStateProps,IActionProps>((state)=>{
    const {displayMode} = state.todo;
    let todos = state.todo.todos;
    if(displayMode === 'active') {
        todos = state.todo.todos.filter((t:any)=>!t.completed);
    }
    if(displayMode === 'completed'){
        todos = state.todo.todos.filter((t:any)=>t.completed);
    }
    return {
        completedAll: state.todo.todos.length === state.todo.todos.filter((t:any)=>t.completed).length,
        editingIndex: state.todo.editingIndex,
        editingText: state.todo.editingText,
        todos,
    }
}, {
    onBlurEditing: app.getDispatcher().todo.cancelEditing,
    onCancelEditing: app.getDispatcher().todo.cancelEditing,
    onEdit: app.getDispatcher().todo.updateEditText,
    onPressDelete: app.getDispatcher().todo.deleteTodo,
    onStartEditing: app.getDispatcher().todo.onStartEditing,
    onSubmitEditing: app.getDispatcher().todo.submitEditing,
    onToggle: app.getDispatcher().todo.toggleCompleted,
    onToggleAll: app.getDispatcher().todo.toggleAll,
})(TodoBody) as any;
