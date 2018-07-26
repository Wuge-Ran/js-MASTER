
let reducer = (state = {}, action) => {
    switch (action.type) {
        case 'changeCheck':
            return {
                ...state,
                list:state.list.map( item => {
                    if(item.id === action.id){
                        return {
                            ...item,
                            checked:!item.checked
                        }
                    }
                    return item;
                } )
            }
            break;
        default:
            return state
            break;
    }
}
export default reducer;