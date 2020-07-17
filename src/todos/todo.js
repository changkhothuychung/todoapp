import React from 'react'
import { Provider } from 'react-redux';
import App from './container/App';
import {store} from './store/store';

const TodoApp = () => {
    return(
        <React.Fragment>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.Fragment>
    )
}

export default React.memo(TodoApp);