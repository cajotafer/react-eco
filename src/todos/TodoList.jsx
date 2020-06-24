import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { loadTodos, removeTodoRequest, markTodoAsCompletedRequest } from './thunks'
import { getTodos, getTodosLoading } from './selectors'
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import './TodoList.css';

const TodoList = ({ isLoading, startLoadingTodos, todos = [], onRemovePressed, onCompletedPressed }) => {
    useEffect(() => {
        startLoadingTodos()
    }, [])
    
    const loadingMessage = <div>Loading todos...</div>
    const content = (
        <div className="list-wrapper">
            <NewTodoForm />
            {todos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed} onCompletedPressed={onCompletedPressed} />)}
        </div>
    ) 

    return isLoading ? loadingMessage : content
};

const mapStateToProps = state => ({
    isLoading: getTodosLoading(state),
    todos: getTodos(state)
})
const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletedPressed: id => dispatch(markTodoAsCompletedRequest(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);