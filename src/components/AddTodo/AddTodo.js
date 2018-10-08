import React, { Component } from 'react';

import './AddTodo.css';

class AddTodo extends Component {

    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            content : "",
            placeholder : "Ajouter une tâche"
        }
    }

    handleClick () {
        this.setState({
            placeholder : ""
        })
    }

    handleChange = (e) => {
        // console.log(e.target.value)
        this.setState({
            content : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state)
        this.props.addTodo(this.state)
        this.setState({
            content : ""
        })
    }

    render () {
        return (

            <form onSubmit={this.handleSubmit} >
                <input
                type="text"
                className="AddTodosContainer"
                value={this.state.content}
                onChange={this.handleChange}
                placeholder={this.state.placeholder}
                onClick={this.handleClick} />
            </form>
        )
    }
}

export default AddTodo;