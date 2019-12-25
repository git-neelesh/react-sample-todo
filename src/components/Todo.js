import React, { Component } from 'react'
import { connect } from 'react-redux'

class Todo extends Component {

    state = {
        title: '',
        desc: ''
    };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo();
    }
    deleteTodo = title => {
        this.props.deleteTodo(title);
    }
    render() {
        return (
            <div>
                <label>Todos</label>
                <div>{this.props.todos.map(todo => {
                    return (<li onClick={() => this.deleteTodo(todo.title)} key={todo.title + Date.now()}>{todo.title} </li>)
                })}</div>
                <form className="ui form">
                    <div className="field">
                        <label>Title</label>
                        <input
                            value={this.state.title}
                            onChange={this.handleChange}

                            type="text"
                            name="title"
                            placeholder="Title"
                        />
                    </div>
                    <div className="field">
                        <label>Description</label>
                        <input
                            value={this.state.desc}
                            onChange={this.handleChange}
                            type="text"
                            name="desc"
                            placeholder="Description"
                        />
                    </div>
                    <button className="ui button blue" type="button" onClick={() => this.props.addTodo(this.state.title, this.state.desc)}>
                        Submit
        </button>
                </form>
            </div>
        )
    }
}
const mapStateToProp = state => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (title, desc) => dispatch({
            type: 'ADD_TODO',
            payload: {
                title: title,
                desc: desc
            }
        }),
        deleteTodo: (title) => dispatch({
            type: 'DELETE_TODO',
            payload: {
                title: title
            }
        })
    }
}
export default connect(mapStateToProp, mapDispatchToProps)(Todo)