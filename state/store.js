import {createStore} from 'redux';
const initial={transactions:[]};
function reducer(s=initial,a){return s;}
export const store=createStore(reducer);