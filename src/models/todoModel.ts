import { IModel } from "./Eduxo";
// tslint:disable-next-line:no-var-requires
const reduxLogic = require("redux-logic");
const { createLogic } = reduxLogic;

interface ITodo {
  title: string;
}

export enum actionTypes {}

export interface IState {
  textValue: string;
  todos: ITodo[];
}

export interface IDispatchers {
  onChangeTextValue: (value: string) => void;
  clearInput: () => void;
  addTodo: () => void;
}

const initialState = {
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
        process: ({ getState }: any) => {
          // const { textValue } = getState();
          return {
            type: "addTodoReducer"
          };
        },
        type: "addTodo"
      });
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
      todos.push({});
      return {
        ...state,
        todos
      };
    }
  }
};

export default model;
