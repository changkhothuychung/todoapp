import { createSelector } from 'reselect';

// lay ra state tong
const rootReselct = state => state.todoReducer

// lay sate count (state con)
export const listWorkReselect = createSelector(
    rootReselct,
    item => item.works 
);


export const listWorkReselectID = createSelector(
    rootReselct,
    item => item.works
);




