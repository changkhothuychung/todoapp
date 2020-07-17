import React from 'react'
import { Button } from 'antd';

const UnfinishedAll = (props) => {
    return(
        <React.Fragment>
             <Button type="dashed" onClick ={() => props.unfinishedAll()}>{props.children}</Button>
        </React.Fragment>
    )
}

export default React.memo(UnfinishedAll);