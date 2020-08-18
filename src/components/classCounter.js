import React, { Component } from 'react';


class ClassCounter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            firstName:'',
            lastName:''
        }
    }
    incrementCounter = () => {
        this.setState(function(prevState){
            return {count:prevState.count+1}
        })
    }
    componentDidMount(){
        document.title=`Count ${this.state.count}`
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.count!==this.state.count)
{        document.title=`Count ${this.state.count}`
        console.log("rendering")
    }
    }
    render() {
        const { count ,firstName,lastName} = this.state
        return (
            <div>

                Count:{count} <button onClick={this.incrementCounter}>Count</button>
                 <input type="text" value={firstName} onChange={(e) =>this.setState({ firstName: e.target.value })} /> <br /><br />
               {/* <input type="text" value={lastName} onChange={(e) => this.setState({ lastName: e.target.value })} />
                <p>My first name is {firstName}</p>
                <br />
                <p>My last name is {lastName}</p> */}
            </div>
        )
    }
}

export default ClassCounter;
