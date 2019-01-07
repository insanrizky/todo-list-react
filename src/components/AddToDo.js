import React, { Component } from 'react';
import { addTodo } from '../actions/actions';
import { connect } from 'react-redux';

class AddToDo extends Component {
    constructor(props){
        super(props);
        this.state = {
            input: ''
        }
    }

    handleInput(e){
        this.setState({
            input: e.target.value
        });
    }

    submit(){
        const text = this.state.input;
        this.props.simpan(text);

        this.setState({
            input: ''
        })
    }

    render(){
        return (
            <div>
                <h3>To Do List</h3>
                <input 
                    type="text"
                    placeholder="to do"
                    onChange={(e) => this.handleInput(e)}
                    value={this.state.input}
                    />
                <button onClick={() => this.submit()}>Add To Do</button>
            </div>
        )
    }
}

const propsRedux = dispatch => ({
    simpan: text => dispatch(addTodo(text))
})

// const stateRedux = () => {};

export default connect(null, propsRedux)(AddToDo);