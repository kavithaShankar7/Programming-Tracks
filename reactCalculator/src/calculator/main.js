import React, {Component} from 'react';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            result: 0,
            problem: [],
            sum: 0,
        }
    }
    
    handleInput = (e) => {
        let val = e.target.value;
        console.log(val);
        this.setState({
            sum: this.state.sum + val,
        })
        this.setState({
            problem: [...this.state.problem, val],
        })

    }

    handleOutput = () => {
        var value = 0;
        let k = this.state.sum.split('');
        console.log(k);
        for(let i=0;i<k.length;i++){
            var literal = k[i];
            if(literal == '+'){
               value +=  parseInt(k[i-1]) + parseInt(k[i+1]) ;
               console.log(value);
            }
            else if(literal == '-'){
                value += parseInt(k[i-1]) - parseInt(k[i+1]) ;
            } else if(literal == '*'){
                value += parseInt(k[i-1]) * parseInt(k[i+1]);
            } else if(literal == '/'){
                value += parseInt(k[i-1]) / parseInt(k[i+1]);
            }
        }
        console.log(value);
        this.setState({
            result: this.state.result+value,
        })
        console.log(this.state.result);
        console.log(this.state.sum);
    }

    handleClear = () => {
        this.setState({
            result: 0,
            problem: [],
            sum: 0,
        })
    }

    render(){
        return(
            <div>
                <table>
                <tr>
                    <td colspan="3">{this.state.result}</td>
                    <td><input type="button" value="C"  onClick={this.handleClear}/></td>
                </tr>
                <tr>
                    <td><input type="button" value="1" onClick={this.handleInput}/></td>
                    <td><input type="button" value="2" onClick={this.handleInput}/></td>
                    <td><input type="button" value="3" onClick={this.handleInput}/></td>
                    <td><input type="button" value="+" onClick={this.handleInput}/></td>
                </tr>
                <tr>
                    <td><input type="button" value="4" onClick={this.handleInput}/></td>
                    <td><input type="button" value="5" onClick={this.handleInput}/></td>
                    <td><input type="button" value="6" onClick={this.handleInput}/></td>
                    <td><input type="button" value="-" onClick={this.handleInput}/></td>
                </tr>
                <tr>
                    <td><input type="button" value="7" onClick={this.handleInput}/></td>
                    <td><input type="button" value="8" onClick={this.handleInput}/></td>
                    <td><input type="button" value="9" onClick={this.handleInput}/></td>
                    <td><input type="button" value="/" onClick={this.handleInput}/></td>
                </tr>
                <tr>
                    <td><input type="button" value="*" onClick={this.handleInput}/></td>
                    <td><input type="button" value="0" onClick={this.handleInput}/></td>
                    <td><input type="button" value="." onClick={this.handleInput}/></td>
                    <td><input type="button" value="=" onClick={this.handleOutput}/></td>
                </tr>
                </table>
            </div>
        )
    }
}

export default Main;