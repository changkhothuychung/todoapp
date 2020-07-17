import * as R from 'ramda';
import {APPTODOADD, APPTODODELETE, APPTODOFINISH, APPTODOFINISHALL, APPTODODELETEALL, APPTODOUNFINISHEDALL} from '../action/const';

const stateDefault = {
    works: []

}

const resetIndex = (item, id) => item[id] = id + 1 ;


const filterWork = (arrayWork, id) => {
    let resArray = []
    let length = arrayWork.length;
    for(let i = 1 ; i < id ; i++){
        resArray.concat(resArray, arrayWork[i]); 
    }
    for(let i = id + 1 ; i <= arrayWork.length ; i++){
        arrayWork[i].id = arrayWork[i].id - 1; 
        resArray.concat(resArray, arrayWork[i]); 
    }
    return resArray; 
}



const todoReducer = (state = stateDefault, action) => {
    switch(action.type){
        case APPTODOADD:
            return {
                works: R.concat(state.works, [{
                    id: state.works.length + 1,
                    name: action.name,
                    done: false
                }])
            }
        case APPTODODELETE:
            const result = R.filter(w => w.id !== action.id, state.works);
            return {works : result}
            
        //    for(let i = action.id; i < state.works.length ; i++){
        //        state.works[i].id -= 1; 
        //    }

            
        //     return {
        //         works: R.remove(action.id - 1, 1 , state.works), 
               
        //     }


        case APPTODOFINISH:
            const data = state.works.map(todos => 
                todos.id === action.id ? {...todos, done: !action.done} : todos
            )

            return {works: data}

        /*
            const printXPlusFive = (x) => {
                if(x.id === action.id){
                    x.done = !(action.done); 
                }
            };

            return {
                works: R.forEach(printXPlusFive, state.works), 
            }
        */

        case APPTODOFINISHALL: 
            const data1 = state.works.map(todos => ({...todos, done: true}) )
            
            return{
                works: data1, 
            }

        case APPTODODELETEALL: 
            return {
                works: [], 
            }

        case APPTODOUNFINISHEDALL: 
            const data2 = state.works.map(todos => ({...todos, done:false}))

            return {
                works: data2, 
            }
        default:
            return state;
    }
}

export default todoReducer;

