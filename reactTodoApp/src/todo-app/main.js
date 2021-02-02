import { Component } from 'react';
import Header from './header';
import { TodoList } from './todoList';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            tasks: ['task 1', 'task 2'],
        }
    }
    handleDelete = (index) => {
        let arr = [...this.state.tasks];
        arr.splice(index, 1);
        this.setState({
            tasks: arr,
        });
    }

    handleSubmit= (e) =>{
        e.preventDefault();
        let value = e.target.add.value;
        this.setState({
            tasks: [...this.state.tasks, value],
        })
    }
    
    render (){
        return(
            <div className='wrapper'>
                <div className='card frame'>
                    <Header num={this.state.tasks.length} />
                    <TodoList tasks={this.state.tasks} onDelete={this.handleDelete}/>
                    <form onSubmit={this.handleSubmit}>
                        <input type='text' name='add'></input>
                         <button> Add </button>
                   </form>
                </div>
            </div>
        )
    }
}

export default Main;