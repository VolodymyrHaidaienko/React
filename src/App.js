import './App.css';
import {useReducer} from "react"

const reducer = (state, action) => {
    switch (action.type){
        case 'inc':
            return {...state, count1: state.count1 + 1}
        case 'dec':
            return {...state, count1: state.count1 - 1}
        case 'reset':
            return {...state, count1: 0}
    }
    return state
}

function App() {
    const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 5 });

    return (
        <div>
            <div>
                {state.count1}

            </div>
            <div>
                {state.count2}
            </div>
            <button onClick={() => dispatch({type:'inc'})}> INC</button>
            <button onClick={() => dispatch({type:'dec'})}> DEC</button>
            <button onClick={() => dispatch({type:'reset'})}>Reset</button>

        </div>
    );
}

export default App;
