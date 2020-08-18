import React ,{Component} from 'react';

class IntervalClass extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
            display:true
        }
    }
    componentDidMount(){
        this.interval=setInterval(this.tick,1000)
    }
    tick=()=>{
       
        this.setState(function(prevState){
           return{count:prevState.count+1}
        })
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    render(){
       if(this.state.display)
         return(
            <div>
                <button onClick={()=>{this.setState({display:!this.state.display})}}>Toggle</button>
                <h3>Count :{this.state.count}</h3>
            </div>
        )
        else{
            return(
                <div>
                Component unmounted
                </div>
            )
        }
    }
}
export default IntervalClass;