import React, {useReducer} from "react";
import reducer from "../reducers/Reducer";





const initailState = 0;


const Home = () => {
    const [state, dispatch] = useReducer(reducer, initailState);

    function increment(value){
        dispatch({type: "ADD", payload: value});
    }

    function decrement(value){
        dispatch({type: "SUBTRACT", payload: value});
    }



    return(
        <div>
            <h1>This is the home folder</h1>
            <button onClick={() => increment(5)}>Increase</button>
            <button onClick={() => decrement(5)}>Decrease</button>
            <h1>{state}</h1>
        </div>
    )
}

export default Home;