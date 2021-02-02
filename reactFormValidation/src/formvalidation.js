import react, {Component} from 'react';

const regex = RegExp(
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
);

const validate = ({isError}) => {
    let isValid = false;
    Object.values(isError).forEach(val => {
            if(val.length > 0){
                isValid = false;
            }
            else{
                isValid = true;
            }
        }
    )
    return isValid;
}

class Formvalidation extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            isError: {
                name: '',
                email: '',
                password: '',
            },
            formValid: false,
        }
    }
    
    formChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        let isError = {...this.state.isError};
        switch(name){
            case 'name':
                isError.name = value.length < 4 ? "Name should be atleast 4 alphabets" : '' ;
                break;
            case 'email':
                isError.email = regex.test(value) ? "" : 'Enter a valid mail id' ;
                break;
            case 'password':
                isError.password = value.length < 6 ? "Password should be atleast 4 characters" : '';
                break;
            default:
                break;
        }
        this.setState({
            isError,
            [name]: value,
        })
    }

    handleSubmit = e =>{
        e.preventDefault();
        if(validate(this.state)){
            this.setState({
                formValid: true,
            })
            console.log('Form is Valid');
        }
        else {
            alert('Form invalid');
        }
    }

    render(){
        let isError = {...this.state.isError};
        
        return(
            <div>
                <div className='message'>
                    <h3> New User Creation Form </h3>
                </div>
            <div className='formDiv'>
                <form onSubmit={this.handleSubmit} className='form'>
                    <div>
                        Username: <input type="text" onChange={this.formChange} name='name' required/>
                        {isError.name.length > 0 && <span className='error-class'>Enter a name of minimum four characters</span>}
                    </div>
                    <div>
                        Email: <input type="email" onChange={this.formChange} name='email' required/>
                        {isError.name.length > 0 && <span className='error-class'>Enter a valid mail id</span>}
                    </div>
                    <div>
                        Password: <input type="password" onChange={this.formChange} name='password' required/>
                        {isError.name.length > 0 && <span className='error-class'>Enter a password of minimum 6 characaters</span>}
                    </div>
                    <button className='submit' type='submit'>Submit</button>
                </form>
            </div>
                {this.state.formValid && 
                    <div className='message'>
                        <h4>New user created ! </h4> 
                    </div>  }
            </div>
        )
    }

}
export default Formvalidation;