import React, { Component } from 'react';
import store from './Store'
import {connect} from 'react-redux'

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()
    }
    render() { 
        return (
            <div>
                <div>
                    <input value={this.props.inputValue} onChange={this.props.inputChange} />
                    <button onClick={this.props.clickButton}>提交</button>
                </div>
                <ul>
                    {
                        this.props.list.map((item,index)=>{
                            return (<li key={index+item} onClick={()=>this.props.deleteItem(index)}>{item}</li>)
                        })
                    }
                </ul>
            </div>
            );
    }
}
const stateToProps = (state)=>{
    return {
        inputValue : state.inputValue,
        list:state.list
    }
}

const dispatchToProps = (dispatch) =>{
    return {
        inputChange(e){
            let action = {
                type:'change_input',
                value:e.target.value
            }
            dispatch(action)
        },
        clickButton(){
            let action = { type:'add_item' }
            dispatch(action)
        },
        deleteItem(index){
            console.log(index)
            let action = {
                 type:'deleteItem',
                 index
        }
            dispatch(action)
        }
    }
}

export default connect(stateToProps,dispatchToProps)(TodoList);