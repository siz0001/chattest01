import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

// 앱의 rest에서 store가 사용가능하도록 해주는 프로바이더(Provider)를 제공
import { Provider } from 'react-redux'
import store from './redux/store'

// TodoApp을 import
import TodoApp from "./TodoApp";

// 기존 : ReactDOM.render(<App />, document.getElementById('root'));
const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  rootElement
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
