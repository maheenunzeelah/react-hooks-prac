import React, { useReducer } from 'react';

const initialState = {
    firstCounter: 0,
    secondCounter: 10
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state,firstCounter: state.firstCounter + action.payload };
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.payload };

        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.payload };
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.payload };
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

const CountReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            Count First-{count.firstCounter}
            <br />
            Count Second-{count.secondCounter}
            <br />
            <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>Decrement</button>
            <br />
            <button onClick={() => dispatch({ type: 'increment', payload: 5 })}>Increment 5</button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 5 })}>Decrement 5</button><br />
            <button onClick={() => dispatch({ type: 'increment2', payload: 1 })}>Increment2</button>
            <button onClick={() => dispatch({ type: 'decrement2', payload: 1 })}>Decrement2</button><br />
            <button onClick={() => dispatch({type:'reset'})}>Reset </button>

        </div>
    )
}
export default CountReducer;