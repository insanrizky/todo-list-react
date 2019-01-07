import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getTodo, deleteTodo } from '../actions/actions';
import { connect } from 'react-redux';

class ToDoList extends Component {
    componentDidMount(){
        this.props.ambil();
    }
    deleteTodo(e, idx){
        e.preventDefault();
        this.props.hapus(idx);
    }
    render(){
        return (
            <div>
                <h4>List</h4>
                <ul>
                    { this.props.toDoList.map((todo, idx) => (
                        <li key={idx} style={{ textAlign: 'left' }}>
                            { todo.text } - 
                            <Link to={`/detail/${idx}`} style={{ color: '#FFF'}}>Lihat</Link> - 
                            <button onClick={(e) => this.deleteTodo(e, idx)}>Hapus</button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

const propsRedux = dispatch => ({
    ambil: () => dispatch(getTodo()),
    hapus: index => dispatch(deleteTodo(index))
})

const stateRedux = state => ({
    toDoList: state.todos.list
});

export default connect(stateRedux, propsRedux)(ToDoList);