import { IModel } from "./Eduxo";
// tslint:disable-next-line:no-var-requires
const reduxLogic = require("redux-logic");
const { createLogic } = reduxLogic;

interface ITodo {
  title: string;
  completed: boolean;
}

export enum actionTypes {}

export interface IState {
  textValue: string;
  todos: ITodo[];
  completedAll: boolean;
  displayMode: string;
  editingIndex: number;
  editingText: string;
}

export interface IDispatchers {
  onChangeTextValue: (value: string) => void;
  clearInput: () => void;
  addTodo: () => void;
  toggleCompleted: (index: number) => void;
  deleteTodo: (index: number) => void;
  toggleAll: () => void;
  setDisplayMode: (mode: string) => void;
  removeCompleted: () => void;
  onStartEditing: (index: number) => void;
  cancelEditing: () => void;
  submitEditing: () => void;
  updateEditText: (value: string) => void;
}

const initialState = {
  completedAll: false,
  displayMode: "all",
  editingIndex: -1,
  editingText: "",
  textValue: "",
  todos: []
};

const model: IModel<IState, IDispatchers> = {
  dispatchers: {
    ["onChangeTextValue"]: value => {
      //
    },
    ["clearInput"]: () => {
      //
    },
    ["addTodo"]: () => {
      //
      return createLogic({
        latest: true,
        process: (
          { getState, action: { payload } }: any,
          dispatch: any,
          done: any
        ) => {
          const { textValue } = getState().todo;
          dispatch({ type: "clearInput" });
          dispatch({
            payload: {
              completed: false,
              title: textValue
            },
            type: "addTodoReducer"
          });
          done();
        },
        type: "addTodo"
      });
    },
    ["toggleCompleted"]: index => {
      //
    },

    ["deleteTodo"]: index => {
      //
    },

    ["setDisplayMode"]: mode => {
      //
    },

    ["removeCompleted"]: () => {
      //
    },

    ["cancelEditing"]: () => {
      /**/
    },

    ["submitEditing"]: () => {
      return createLogic({
        latest: true,
        process: (
          { getState, action: { payload } }: any,
          dispatch: any,
          done: any
        ) => {
          const { editingText, editingIndex, todos } = getState().todo;
          const newTodos = todos.slice();
          const newTodo = newTodos[editingIndex];
          newTodo.title = editingText;
          dispatch({
            payload: {
              index: editingIndex,
              todo: newTodo
            },
            type: "replaceTodo"
          });
          dispatch({ type: "cancelEditing" });
        },
        type: "submitEditing"
      });
    },

    ["updateEditText"]: value => {
      //
    },

    ["toggleAll"]: () => {
      return createLogic({
        latest: true,
        process: (
          { getState, action: { payload } }: any,
          dispatch: any,
          done: any
        ) => {
          const { todos } = getState().todo;
          const isCompletedAll =
            todos.length === todos.filter((t: any) => t.completed).length;
          if (isCompletedAll) {
            dispatch({ type: "markAllNonCompleted" });
          } else {
            dispatch({ type: "markAllCompleted" });
          }
          done();
        },
        type: "toggleAll"
      });
    },
    ["onStartEditing"]: index => {
      //
    }
  },
  initialState,
  namespace: "todo",
  reducers: {
    ["onChangeTextValue"]: (state = initialState, action: any) => {
      return {
        ...state,
        textValue: action.payload.value
      };
    },
    ["clearInput"]: (state = initialState, action: any) => {
      return {
        ...state,
        textValue: ""
      };
    },
    ["addTodoReducer"]: (state = initialState, action: any) => {
      const todos: any = state.todos.slice();
      todos.push(action.payload);
      return {
        ...state,
        todos
      };
    },
    ["toggleCompleted"]: (state = initialState, action: any) => {
      const { index } = action.payload;
      const todos: any = state.todos.slice();
      todos[index].completed = !todos[index].completed;
      return {
        ...state,
        todos
      };
    },
    ["deleteTodo"]: (state = initialState, action: any) => {
      const { index } = action.payload;
      const todos: any = state.todos.slice();
      todos.splice(index, 1);
      // todos[index].completed = !todos[index].completed;
      return {
        ...state,
        todos
      };
    },
    ["markAllCompleted"]: (state = initialState, action: any) => {
      const todos: any = state.todos.slice();
      todos.forEach((todo: any) => {
        todo.completed = true;
      });
      // todos[index].completed = true;
      return {
        ...state,
        todos
      };
    },
    ["markAllNonCompleted"]: (state = initialState, action: any) => {
      const todos: any = state.todos.slice();
      todos.forEach((todo: any) => {
        todo.completed = false;
      });
      return {
        ...state,
        todos
      };
    },
    ["setDisplayMode"]: (state = initialState, action: any) => {
      return {
        ...state,
        displayMode: action.payload.mode
      };
    },
    ["removeCompleted"]: (state = initialState, action: any) => {
      const todos: any = state.todos.slice().filter((t: any) => !t.completed);
      return {
        ...state,
        todos
      };
    },
    ["onStartEditing"]: (state = initialState, action: any) => {
      const editingIndex = action.payload.index;
      const editingText = state.todos[editingIndex].title;
      return {
        ...state,
        editingIndex,
        editingText
      };
    },
    ["cancelEditing"]: (state = initialState, action: any) => {
      return {
        ...state,
        editingIndex: -1,
        editingText: ""
      };
    },
    ["updateEditText"]: (state = initialState, action: any) => {
      return {
        ...state,
        editingText: action.payload.value
      };
    },
    ["replaceTodo"]: (state = initialState, action: any) => {
      const { index, todo } = action.payload;
      const todos = state.todos.slice();
      todos[index] = todo;
      return {
        ...state,
        todos
      };
    }
  }
};

export default model;
