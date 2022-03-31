
// reducer takes in two arguments, a state and an action
export default function reducer(state, action){
    switch(action.type){
        case 'ADD':
            // get the value from sate
            let currentValue = state;
            // whenever you provid a state you have to return an action (actions are objects)
            // action always includes payload which is the data
            return currentValue += action.payload;
        case 'SUBTRACT':
            let currentValueSub = state;
            return currentValueSub -= action.payload;
        default:
            return state;
    }
};

