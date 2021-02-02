import { Component } from 'react';

class Header extends Component{
    render (){
        return(
            <div className='card-header'>
                <h1 className='card-header-title header'>
                    You have {this.props.num} Todos
                </h1>
            </div>
        )
    }
}

export default Header;