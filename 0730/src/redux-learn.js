import {createStore} from 'redux';

let data = {
    a:1,
    b:2
}

function reducer(data = {},action){
    console.log('ok123');
    switch(action.type){
        case 'change':
        return {
            ...data,
            b:action.newNum
        }
        break;
        default:
        return data;
    }
}

const store = createStore(reducer,data,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.subscribe( function (){
    console.log( '获取state', store.getState());
} )

store.dispatch({ type:'change',newNum:999});

