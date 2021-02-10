import {Component} from 'react';
import axios from 'axios';
import {Daily} from './daily';

class Weather extends Component{
    constructor(props){
        super(props);
        this.state = {
            current: [],
        }
    }

    handleClick = (e) => {
        let date=e.target.value;
        console.log(date);
        axios.get(`https://api.openweathermap.org/data/2.5/onecall/timemachine?&dt=${date}&lat=13.067439&lon=80.237617&exclude=hourly,daily&appid=c37422de582fc4ebf5d918c95a07e5fc`)
        .then(
                    response => {
                        let data = response.data;
                        this.setState({
                            current: data.current,
                        })
                        
                    }
                )
    }

    render(){
        
        return(
            <div>
                <button id='saturday' value='1612614808' onClick={this.handleClick}> Saturday Forecast : 6th feb 2021</button>
                <br/>
                <button id='saturday' value='1612701208' onClick={this.handleClick}> Sunday Forecast : 7th feb 2021</button>
                <br/>
                <button id='saturday' value='1612787608' onClick={this.handleClick}> Monday Forecast : 8th feb 2021</button>
                <br/>
                <button id='saturday' value='1612874008' onClick={this.handleClick}> Tuesday Forecast : 9th feb 2021</button>
                <br/>
                <button id='saturday' value='1612960408' onClick={this.handleClick}> Wednesday Forecast : 10th feb 2021</button>
                <br/>
                <hr/>
                {
                  this.state.current ? console.log(this.state.current): ''
                }
                <Daily data={this.state.current} />
            </div>
        )
    }
}

export default Weather;