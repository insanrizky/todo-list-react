import React, { Component } from 'react';
import { addTodo } from '../actions/actions';
import { connect } from 'react-redux';

class AddToDo extends Component {
    constructor(props){
        super(props);
        this.state = {
            input: '',
            time: '',

            required: true,
        }
    }

    handleRequired(){
        this.setState({
            required: this.state.input === '' || this.state.time === ''
        });
    }

    handleInput(e){
        this.setState({
            input: e.target.value
        }, () => this.handleRequired());
    }

    handleTime(e){
        this.setState({
            time: e.target.value
        }, () => this.handleRequired());
    }

    submit(){
        const text = {
            todo: this.state.input,
            time: this.state.time
        };
        this.props.simpan(text);

        this.setState({
            input: '',
            time: ''
        })
    }

    render(){
        return (
            <div>
                <h3>To Do List</h3>
                <input 
                    type="text"
                    placeholder="To Do"
                    onChange={(e) => this.handleInput(e)}
                    value={this.state.input}
                    />
                <br/>
                <input
                    type="text"
                    placeholder="Time"
                    onChange={(e) => this.handleTime(e)}
                    value={this.state.time}
                    />
                <br/>
                <button 
                    disabled={this.state.required}
                    onClick={() => this.submit()}
                    >Add To Do</button>
            </div>
        )
    }
}

const propsRedux = dispatch => ({
    simpan: text => dispatch(addTodo(text))
})

// const stateRedux = () => {};

export default connect(null, propsRedux)(AddToDo);