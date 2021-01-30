import React from 'react';
import ReactDOM from 'react-dom';
import Todolist from './Todolist'
import { Provider} from 'react-redux'
import store from './Store'

const App=(
  <Provider store={store}>
    <Todolist />
  </Provider>
)

ReactDOM.render(App,
  document.getElementById('root')
);

