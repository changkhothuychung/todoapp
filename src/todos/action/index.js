import {APPTODOADD, APPTODODELETE, APPTODOFINISH, APPTODOFINISHALL, APPTODODELETEALL, APPTODOUNFINISHEDALL} from './const';

export const appToDoWork = (name) => {
    return {
        type: APPTODOADD, 
        name
    }
}

export const appToDoDelete = (id) => {
    return {
        type: APPTODODELETE,
        id
    }
}

export const appToDoFinish = (id, done) => {
    return {
        type: APPTODOFINISH,
        id,
        done
    }
}

export const appToDoFinishAll = () => {
    return {
        type: APPTODOFINISHALL, 
    }
}

export const appToDoDeleteAll = () => {
    return {
        type: APPTODODELETEALL, 
    }
}


export const appToDoUnfinishedAll = () => {
    return {
        type: APPTODOUNFINISHEDALL, 
    }
}