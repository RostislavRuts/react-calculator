import React, {Component} from 'react';
import './../../App.css';

class ToDoList extends Component {
    constructor(props){
        super();

        this.state = {
            tasks: ['learn js', 'learn react']
        };
    }

    render() {
        return (
            <div className="todolist">
                <div className="header">
                    <input/>
                </div>
                <div className="tasks">
                    {this.state.tasks.map((items) => {
                        return (
                        <div className="task">{items}</div>
                        )
                    })}
                </div>
            </div>
        )
    }
    
}

export default ToDoList;