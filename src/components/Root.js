import React, { Component } from 'react';
import '../App.css';
import AddToDo from './AddToDo';
import ToDoList from './ToDoList';

class Root extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <AddToDo/>
                    <ToDoList/>
                </header>
            </div>
        )
    }
}

export default Root;