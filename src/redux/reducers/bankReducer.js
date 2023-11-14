const initialState={
    money:5000
}
export const bankReducer=(state=initialState,action)=>{
    switch (action.type){       
        case 'RUT_TIEN':
            return{
                ...state,money:state.money-action.payload
            }
        case 'NHAN_TIEN':
            return{
                ...state,money:state.money+action.payload
            }
        default:
            return state
    }
}