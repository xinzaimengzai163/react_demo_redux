const defaultState = {
    inputValue:'dddooo',
    list:['早7点', '早9点', '下午3点']

}
export default (state = defaultState, action) =>{
    if(action.type === 'change_input'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    //----关键代码------start---------
    if(action.type === 'add_item'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if(action.type === 'deleteItem' ){ 
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.list.splice(action.index, 1)  //删除数组中对应的值
        return newState
    }
    // ----关键代码------end---------
    return state
}