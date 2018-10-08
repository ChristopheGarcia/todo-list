import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusSquare} from '@fortawesome/free-solid-svg-icons';
import './TodosList.css';

const TodosList = ({todos, deleteTodo}) => {

    const listTodos = todos.length ? (
        
        todos.map(todo => {

            return (

                <div className="todos" key={todo.id}>
                    
                    <FontAwesomeIcon
                    icon={faMinusSquare}
                    className="deleteIcon"
                    onClick={() => deleteTodo(todo.id)}
                    /> 
                    
                    <span>{todo.content}</span>
                    
                </div>
            )
        })

    ) : (

        <div className="todos">
            <p className="paragraph">Aucune tâche programmée</p>
        </div>
        
    )

    return (

        <div className="todosContainer">

            {listTodos}

        </div>

    )
}

export default TodosList;