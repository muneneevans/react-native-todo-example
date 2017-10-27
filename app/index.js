import React, { Component } from "react"
import AppShell from "./Screens/AppShell"
import { Provider } from "react-redux"

//get the redux store
import  store from "./Store/configureStore"

class TodoApplication extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppShell />
            </Provider>
        )
    }
}

export default TodoApplication