let initialState={
    count:0
}

function reducer(state=initialState,action){
    console.log("aciton은 뭘까?",action)

switch (action.type) {
    case "INCREMENT":
        return {...state, count:state.count+1} //다른 state 값은 유지하되(state...), 현재 해당되는 state만 변경한다
    case "DECREASE":
        return {...state, count: state.count-1}
        default:
        return {...state};
};
};


export default reducer