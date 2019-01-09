import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getTodoByIndex } from '../actions/actions';
import { connect } from 'react-redux';

class Detail extends Component {
    componentDidMount(){
        this.props.ambil(this.props.route.match.params.index);
    }
    renderDetail() {
        if (this.props.detail) {
            return <h3>{ parseInt(this.props.route.match.params.index)+1 } - { this.props.detail.text }  - { this.props.detail.time } </h3>
        } else {
            return <h3>Data Tidak Ditemukan</h3>
        }
    }
    render() {
        return (
            <div className="App">
                { this.renderDetail() }
                <Link to={'/'}>Kembali</Link>
            </div>
        )
    }
}

const propsRedux = dispatch => ({
    ambil: index => dispatch(getTodoByIndex(index))
})

const stateRedux = state => ({
    detail: state.todos.detail
});

export default connect(stateRedux, propsRedux)(Detail);